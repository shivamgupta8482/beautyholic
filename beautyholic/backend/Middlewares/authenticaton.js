const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  console.log(req.headers)
  if (!req.headers.authorization) {
    return res.send("Please Login Again");
  }

  const user_token = req.headers.authorization.split(" ")[1];
  jwt.verify(user_token, process.env.jwt_secret_key, function (err, decoded) {
    if (err) {
      return res.send("Please Login Again Please!!");
    }
    req.body.email = decoded.email;
    req.body.userId = decoded.userId;
    next();
  });
};

module.exports = authentication;
