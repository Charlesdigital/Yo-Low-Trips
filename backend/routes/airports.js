const { render } = require("../app");
const db = require("../db")
const express = require('express');
const router = express.Router();
const helpers = require("../helpers/dbHelpers")(db);

/* GET home page. */
module.exports = (dbhelper) => {

  router.get("/:code", (req, res) => {

    helpers.getAirportCodes(req.params.code)
    .then(function (rows) {
        res.header("Access-Control-Allow-Origin", "*");

        res.json(
          rows
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });


  return router;
};