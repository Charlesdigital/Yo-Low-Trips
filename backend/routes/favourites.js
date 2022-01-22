const db = require("../db")
const router = require("express").Router();
const helpers = require("../helpers/dbHelpers")(db);

module.exports = () => {
  router.get("/favourites/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    // console.log("THIS IS USER!!!!!", user_id)
    helpers.getAllFavouritesForUser(user_id)
      .then((result) => {
      // console.log("RESULT+++++++++++", result)
      const favData = result;
     
      //important for CORS error
      res.header("Access-Control-Allow-Origin", "*");
      res.send(favData);
    });
  });

  // POST to update Favourites Table
  router.post("/favourites", (req, res) => {
    const user_id = req.params.user_id;
    helpers.addFavourite({...req.body, user_id: user_id})
      .then(favourite => {
        res.send(favourite);
      })
      .catch(err => {
        console.error(err);
        res.send(err)
      });
  });
  
  // POST to remove favourite flight in table
  router.post("/delete/:fav_id", (req, res) => {
    const favItem = req.params.favourites.favId;
    helpers.removeFavourite(favItem)
      .then(remove => {
        res.send(remove);
      })
      .catch(err => {
        res.status(400).send("FAVOURITE ITEM FAILED TO REMOVE");
      })

  })
  
  return router;
}