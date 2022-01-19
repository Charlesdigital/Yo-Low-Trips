var express = require('express');
var router = express.Router();
//const dbHelpers = require('./helpers/dbHelpers')(db);

/* GET home page. */
module.exports = (dbhelper) => {

  router.get('/:code', (req, res) => {
    console.log("test2",req.body)

    dbhelper.getAirportCodes(req.params.code)
    .then(function (rows) {
        console.log("rows");

        res.json({
          success: true,
          data: rows
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });


  return router;
};