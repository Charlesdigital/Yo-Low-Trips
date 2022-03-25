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
      return response;
    });
  }
  exports.login = login

  /* Submit user data to be processed */
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {

      login(email, password)
      .then(user => {
        if (!user) {
          return res.status(404).send({ status: "Error", message: "Invalid user" });
        }
        return res.status(200).send({ status: "Login", message: "Welcome to Yo-low Trips!", user });
      })
      .catch(e => res.send(e));

    }
  });

  // Logout user
  router.post("/logout", (req, res) => {
    req.session.userId = null;
    res.send({});
  });

   return router;
};
