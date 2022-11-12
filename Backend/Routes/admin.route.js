// const { Router } = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const {adminModel} = require("../Model/admin.model");
// const adminController = Router();

// // all products
// adminController.get("/", async (req, res) => {
//   const products = await adminModel.find({});
//   res.send(products);
// });

// // Blush category
// adminController.get("/blush", async (req, res) => {
//     const products = await adminModel.find({product_type:"blush"});
//     res.send(products);
//   });

// // Bronzer category
// adminController.get("/bronzer", async (req, res) => {
//     const products = await adminModel.find({product_type:"bronzer"});
//     res.send(products);
//   });

// // Eyebrow category
// adminController.get("/eyebrow", async (req, res) => {
//     const products = await adminModel.find({product_type:"eyebrow"});
//     res.send(products);
//   });


//   // Eyeliner category
// adminController.get("/eyeliner", async (req, res) => {
//     const products = await adminModel.find({product_type:"eyeliner"});
//     res.send(products);
//   });


//   // Eyeshadow category
// adminController.get("/eyeshadow", async (req, res) => {
//     const products = await adminModel.find({product_type:"eyeshadow"});
//     res.send(products);
//   });


//     // Foundation category
// adminController.get("/foundation", async (req, res) => {
//     const products = await adminModel.find({product_type:"foundation"});
//     res.send(products);
//   });


//     // Lip liner category
// adminController.get("/lip_liner", async (req, res) => {
//     const products = await adminModel.find({product_type:"lip_liner"});
//     res.send(products);
//   });


//       // Lipstick category
// adminController.get("/lipstick", async (req, res) => {
//     const products = await adminModel.find({product_type:"lipstick"});
//     res.send(products);
//   });


//         // Mascara category
// adminController.get("/mascara", async (req, res) => {
//     const products = await adminModel.find({product_type:"mascara"});
//     res.send(products);
//   });


//          // Nail polish category
// adminController.get("/nail_polish", async (req, res) => {
//     const products = await adminModel.find({product_type:"nail_polish"});
//     res.send(products);
//   });


// // CRUD start below *************************** 


// adminController.post("/create", async (req, res) => {
//   const {
//     id,
//     brand,
//     name,
//     price,
//     price_sign,
//     currency,
//     image_link,
//     product_link,
//     website_link,
//     description,
//     rating,
//     category,
//     product_type,
//     tag_list,
//     created_at,
//     updated_at,
//     product_api_url,
//     api_featured_image,
//     product_colors,
//   } = req.body;

//   const note = new adminModel({
//     id,
//     brand,
//     name,
//     price,
//     price_sign,
//     currency,
//     image_link,
//     product_link,
//     website_link,
//     description,
//     rating,
//     category,
//     product_type,
//     tag_list,
//     created_at,
//     updated_at,
//     product_api_url,
//     api_featured_image,
//     product_colors,
//   });
//   try {
//     await note.save();
//     res.send("note created");
//   } catch (err) {
//       console.log(err)
//     res.send("something went wrong");
//   }
// });

// adminController.delete("/delete/:productId", async (req, res) => {
//   const { productId } = req.params;
//   const deleteproduct = await adminModel.findOneAndDelete({
//     _id: productId,
//     userId: req.body.userId,
//   });
//   if (deleteproduct) {
//     res.send("Deleted");
//   } else {
//     res.send("couldn't delete");
//   }
// });

// adminController.patch("/edit/:productId", async (req, res) => {
//   const { productId } = req.params;

//   const updateProduct = await adminModel.findOneAndUpdate(
//     { _id: productId, userId: req.body.userId },
//     { ...req.body }
//   );
//   if (updateProduct) {
//     res.send("updated");
//   } else {
//     res.send("couldn't update");
//   }
// });

// module.exports = {
//   adminController
// };
