const { render } = require("../app");
const db = require("../db")
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);

module.exports = () => {
  router.get("/", (req, res) => {
    // helpers.getUsers(2).then((result) => {
    //   const users = result[0];
    //   console.log(users);
    //   //important for CORS error
    //   res.header("Access-Control-Allow-Origin", "*");
    //   //res.status(200).json({ users })
    //   res.send({ users });
    //   // res.json("db result", { users });
    // });
  
    helpers.getFlights().then((result) => {
      console.log(result)
      const flightData = result;
     
      //important for CORS error
      res.header("Access-Control-Allow-Origin", "*");
      //res.status(200).json({ users })
      res.send( flightData );
      // res.json("db result", { users });
    });
    //res.send("USER DATA")
  });
  

  return router;
}