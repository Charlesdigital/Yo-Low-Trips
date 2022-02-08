
const db = require("../db");
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);
const fetch = require("node-fetch");
const { DatabaseError } = require("pg");

module.exports = () => {
  router.get("/:id", (req, result) => {

    const params = {
      origin: req.params.id,
      page: "None", // default it shows 100 object
      currency: "CAD",
      destination: "-",
    };

    const qs = new URLSearchParams(params);

    const header = {
      "x-access-token": "e62e076131586fa535bf5122617771fd",
      "x-rapidapi-host":
        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
      "x-rapidapi-key": "b171b851e2msh63c29682d8b9f4ep1465fcjsn38b2167465d3",
      useQueryString: true,
    };
    const response = fetch(
      "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?" +
        qs,
      {
        headers: {
          "x-access-token": "e62e076131586fa535bf5122617771fd",
          "x-rapidapi-host":
            "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "b171b851e2msh63c29682d8b9f4ep1465fcjsn38b2167465d3",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then(async (res) => {
        const data = res.data;

        const flightArrayPromises = Object.keys(data).map(async (key) => {
          const flightData = data[key];
          const flightObject = {};

          for (let item in flightData) {
            const flightNumber = await helpers.getFlightNumber(flightData[item].flight_number)
            //set object for flight data and if favourited
            flightObject[item] = ({
                destination: key,
                flightData: flightData[item],
                favourited: flightNumber[0] ? true: false
              });
          }
          return flightObject
        });
        const flightArray = await Promise.all(flightArrayPromises)
        const flightArrayParse = [];

        for (const flightItem of flightArray) {
          for (const flightObject in flightItem) {
            flightArrayParse.push(flightItem[flightObject])
          }
        }

        console.log("RES", flightArrayParse);
        result.json(flightArrayParse);
      });


  });

  router.post("/:id/user/favourites", (req,res) => {
    const {id} = req.params;
    console.log(`THIS IS ORIGIN!!!!!! ${id}`)
    const { flightObj, user_id } = req.body
    const { destination } = flightObj; // destructure so it's easy to access
    const { airline, departure_at, expires_at, flight_number, price, return_at } = flightObj.flightData

    const fav_id = Math.floor(Math.random() * 100);
    helpers.addToFavourite(fav_id, user_id, flightObj, id)
      .then((response) => {
        const favFlight = response;
        res.send(favFlight);
      })
  })

  return router;
};