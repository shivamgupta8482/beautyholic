const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String },
  link: { type: String },
  price: { type: Number },
  thumbnail: { type: String,},
  id: { type: Number,},
  brand: { type: String },
  name: { type: String },
  price: { type: Number },
  price_sign: { type: String },
  currency: { type: String },
  image_link: { type: String },
  product_link:{ type: String } ,
  website_link: { type: String },
  description:{ type: String } ,
  rating:{ type: Number },
  category:{ type: String } ,
  product_type:{ type: String } ,
  tag_list: { type: Array },
  created_at: { type: String },
  updated_at: { type: String },
  product_api_url:{ type: String } ,
  api_featured_image: { type: String },
  product_colors: { type: Array }
 
});

const productModel = mongoose.model("allproduct", productSchema);

module.exports = {productModel};







// id,
// brand ,
// name ,
// price ,
// price_sign ,
// currency ,
// image_link ,
// product_link ,
// website_link ,
// description ,
// rating,
// category ,
// product_type ,
// tag_list ,
// created_at ,
// updated_at ,
// product_api_url ,
// api_featured_image ,
// product_colors 



