const db = require("../db");
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);
const fetch = require("node-fetch");

module.exports = () => {
  router.get("/:id", (req, result) => {

    console.log("test15", req.params)
    // helpers.getUsers(2).then((result) => {
    //   const users = result[0];
    //   console.log(users);
    //   //important for CORS error
    //   res.header("Access-Control-Allow-Origin", "*");
    //   //res.status(200).json({ users })
    //   res.send({ users });
    //   // res.json("db result", { users });
    // });



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
      .then((res) => {
        const data = res.data;
        // console.log("test16, abc------------------------",data)
        let flightDataObject = {}
        for(const key in data) {
          // let flightCode = key
          // console.log("test 17-----------", key)
          // console.log("test 18?-----------returns multiple flight for key", data[key])
          for (const obj in data[key]) {
            // console.log("test 21-----------", key)
            // console.log("test 19-----------", data[key][obj])
            // const flightObjectData = {flightCode: data[key][obj]}
            // flightDataArray.push({[key]:data[key][obj]})
            // only showing first value of each flight code
            flightDataObject = {...flightDataObject, [key]:data[key][obj]}
            //  console.log("test 20-----------only showing first value of each flight code", flightDataObject)

          }
        }
        // console.log("test 22-----------", flightDataObject)

        const flightArray = [];
        //console.log("test flight data object",flightDataObject)
        Object.keys(flightDataObject).forEach((key) => {
          const flightData = flightDataObject[key];
          //console.log("test 23-----------", flightData)
          flightArray.push({
            destination: key,
            flightData: flightData,
          });
          // for (let item in flightData) {
          //   //console.log("FDI", flightData[item])
            
          // }

        });
        console.log("RES", flightArray);
        //console.log("test 24-----------", flightDataObject)

        result.json(flightArray);
      });

    //console.log(response)

  });

  router.post("/:id/user/favourites", (req,res) => {
    const {id} = req.params;
    console.log(`THIS IS ORIGIN!!!!!! ${id}`)
    const { flightObj, user_id } = req.body
    const { destination } = flightObj; // destructure so it's easy to access
    const { airline, departure_at, expires_at, flight_number, price, return_at } = flightObj.flightData
    // console.log(`THIS IS PRICE: ${price} && THIS IS DESTINATION ${destination}`)
    helpers.addToFavourite(id, user_id, flightObj)
      .then((response) => {
        // console.log("THIS RESPONSE", response)
        const favFlight = response;
        res.send(favFlight);
      })
  })

  return router;
};
