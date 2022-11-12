const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const customerModel = require("../Model/user.model");

const customerRouter = express.Router();

customerRouter.post("/register", (req, res) => {
  const { first_name, last_name, email, password, phone } = req.body;
  bcrypt.hash(password, 6, async function (err, hash) {
    if (err) {
      return res.send({ message: "Please Try Again" });
    }
    const exist_user = await customerModel.findOne({ email });
    if (!exist_user) {
      const user = new customerModel({
        first_name,
        last_name,
        email,
        password: hash,
        phone,
      });
      user.save();
      res.send({ message: "Signup Successful" });
    } else {
      res.send({ message: "User Already Exist" });
    }
  });
});

customerRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await customerModel.findOne({ email });
  if (!user) {
    return res.send({ message: "User not exists" });
  }
  const hashed_password = user.password;
  bcrypt.compare(password, hashed_password, async function (err, result) {
    if (result) {
      var token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.jwt_secret_key
      );
      return res.send({ message: "Login Successful", token: token });
    } else {
      return res.send({ message: "Invalid Credentials" });
    }
  });
});

module.exports = customerRouter;
