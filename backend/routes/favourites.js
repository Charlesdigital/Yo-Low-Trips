const { render } = require("../app");
const db = require("../db")
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);

module.exports = () => {
  router.get("/favourites", (req, res) => {
    helpers.getAllFavouritesForUser(1).then((result) => {
      console.log("RESULT", result)
      const favData = result;
     
      //important for CORS error
      res.header("Access-Control-Allow-Origin", "*");
      //res.status(200).json({ users })
      res.send( favData );
      // res.json("db result", { users });
    });
  });

  router.get("/favourites/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    helpers.getAllFavouritesForUser(user_id).then((result) => {
      console.log("RESULT", result)
      const favData = result;
     
      //important for CORS error
      res.header("Access-Control-Allow-Origin", "*");
      //res.status(200).json({ users })
      res.send( favData );
      // res.json("db result", { users });
    });
  });

  // POST to update Favourites Table
  router.post("/favourites", (req, res) => {
    const userId = req.session.userId;
    helpers.addFavourite({...req.body, user_id: userId})
      .then(favourite => {
        res.send(favourite);
      })
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  });
  
  return router;
}