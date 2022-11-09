const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const customerModel = require("../Model/user.model");

const customerRouter = express.Router();

customerRouter.post("/register", (req, res) => {
  const { first_name, last_name, email, password, phone } = req.body;
  bcrypt.hash(password, 6, async function (err, hash) {
    if (err) {
      return res.send("Please Try Again");
    }
    const user = new customerModel({
      first_name,
      last_name,
      email,
      password: hash,
      phone,
    });
    user.save();
    res.send("Signup Successful");
  });
});

module.exports = customerRouter
