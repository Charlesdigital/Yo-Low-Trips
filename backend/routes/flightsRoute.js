const { render } = require("../app");

const router = require("express").Router();

module.exports = () => {
  router.get("/flights", (request, response) => {
    console.log("API WORKS")

    render("flights", TemplateVars)
    
  });
}