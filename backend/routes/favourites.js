const { render } = require("../app");
const db = require("../db")
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);

module.exports = () => {
  router.get("/", (req, res) => {
    helpers.getAllFavouritesForUser(1).then((result) => {
      console.log("RESULT", result)
      const flightData = result;
     
      //important for CORS error
      res.header("Access-Control-Allow-Origin", "*");
      //res.status(200).json({ users })
      res.send( flightData );
      // res.json("db result", { users });
    });
  });
  

  return router;
}