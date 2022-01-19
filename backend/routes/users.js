const express = require('express');
const router = express.Router();
const db = require("../db");
const helpers = require("../helpers/dbHelpers")(db);

module.exports = function (db) {
  /** GET users listing **/
  router.get("/", (req, res) =>
    helpers.getUsers(1)
      .then(data => {
        const user = data;
        // console.log("USER DATA", data)
        // const users = data.rows;
        //res.header("Access-Control-Allow-Origin", "*");
        res.json({ user });
      })
      .catch(err => {
        console.error(err);
      })
  );
  
  /* Submit user data to be processed */
  router.post("/login", async (req, res) => {
    console.log('REQ BODY', req.body);
    const { email, password } = req.body;
    const user = await db.query(`
    SELECT email, password FROM users
    WHERE email = $1`, [email])
    res.json ({ user });
  })
   return router
}
// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.render("index")
// });

// module.exports = router;
