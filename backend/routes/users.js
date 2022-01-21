const router = require("express").Router();
const session = require('express-session');
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
  
  // check if a user exists with a given username and password
  const login = function (email, password) {
    return helpers.getUserByEmail(email)
    .then(response => {
      console.log("Database user:", response)
      return response;
    });
  }
  exports.login = login
  
  /* Submit user data to be processed */
  router.post("/login", async (req, res) => {
    console.log('REQ BODY', req.body);
    const { email, password } = req.body;
    if (email && password) {
      
      login(email, password)
      .then(user => {
        if (!user) {
          console.log("THIS SHOULD RUN********")
          // res.send({error: "error"});
          return res.status(404).send({ status: "Error", message: "Invalid user" }); // this will going to .catch err on front end
        }
        // res.redirect("favourites");
        console.log("SHOULDNT WORK+++++++++++++", user)
        // res.redirect("/flights")
        return res.status(200).send({ status: "Login", message: "Welcome to Yo-low Trips!", user }); // this will go to .then
        //req.session.userId = user.id;
        //res.json({user: {name: user.first_name, email: user.email, id: user.id}});
      })
      .catch(e => res.send(e));

    }

    
      // const user = await db.query(`
      // SELECT email, password FROM users
      // WHERE email = $1`, [email])
  });

  // Logout user
  router.post("/logout", (req, res) => {
    req.session.userId = null;
    res.send({});
  });

   return router;
};
// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.render("index")
// });

// module.exports = router;
