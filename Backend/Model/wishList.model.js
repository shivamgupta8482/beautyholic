const mongoose = require("mongoose");

const wishListSchema = mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});

const wishListModel = mongoose.model("customer", wishListSchema);

module.exports = wishListModel;


// https://beautybebodbjson.onrender.com/Hair