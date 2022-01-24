const { render } = require("../app");
const db = require("../db")
const express = require('express');
const router = express.Router();
//const dbHelpers = require('./helpers/dbHelpers')(db);
const helpers = require("../helpers/dbHelpers")(db);

/* GET home page. */
module.exports = (dbhelper) => {

  router.get("/:code", (req, res) => {
    console.log("test2",req.params.code)

    helpers.getAirportCodes(req.params.code)
    .then(function (rows) {
        // console.log("test7",rows);
        res.header("Access-Control-Allow-Origin", "*");

        res.json(
          rows
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // router.get("/" (req, res) => {
  //   console.log("first airport route", req.body)
  // });

  return router;
};