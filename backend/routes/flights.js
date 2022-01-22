const { render } = require("../app");
const db = require("../db");
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);
const fetch = require("node-fetch");
//const request = require('request');

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
      page: "None",
      currency: "CAD",
      destination: "-",
    };

    const qs = new URLSearchParams(params);

    // const options = {
    //   method: 'GET',
    //   url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap',
    //   qs: {origin: 'HKT', page: 'None', currency: 'CAD', destination: '-'},
    // headers: {
    //   'x-access-token': 'e62e076131586fa535bf5122617771fd',
    //   'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
    //   'x-rapidapi-key': 'b171b851e2msh63c29682d8b9f4ep1465fcjsn38b2167465d3',
    //   useQueryString: true
    // }
    // };

    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log("RESPONSE", body);
    // });

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
        const flightArray = [];
        Object.keys(data).forEach((key) => {
          const flightData = data[key];

          for (let item in flightData) {
            flightArray.push({
              destination: key,
              flightData: flightData[item],
            });
          }

        });
        console.log("RES", flightArray);
        result.json(flightArray);
      });

    //console.log(response)

    // helpers.getFlights().then((result) => {
    //   console.log(result)
    //   const flightData = result;

    //   //important for CORS error
    //   res.header("Access-Control-Allow-Origin", "*");
    //   //res.status(200).json({ users })
    //   res.send( flightData );
    //   // res.json("db result", { users });
    // });
    //res.send("USER DATA")
  });

  return router;
};
