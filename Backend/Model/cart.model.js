const { model, Schema } = require("mongoose");
const cartSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  userId: { type: String, required: true },
});
module.exports = model("cart", cartSchema);
