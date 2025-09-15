const express = require("express");
const routes= express.Router();
const ValidateUSer = require("../Utills/Registration_validation");  
const { RegisterUser } = require("../Controller/UserRegistration");

routes.get("/", (req, res) => {
  res.send("Hello World from routes!");
});


routes.post("/user_registration", ValidateUSer, RegisterUser);

module.exports = routes;