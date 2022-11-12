const mongoose = require("mongoose");

const addCartSchema = mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  
});

const addCartModel = mongoose.model("customer", addCartSchema);

module.exports = addCartModel;
