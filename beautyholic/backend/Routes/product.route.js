const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {productModel} = require("../Model/products.model");
const productController = Router();

// all products
productController.get("/", async (req, res) => {
  const products = await productModel.find({});
  res.send(products);
});

// // search products
// productController.get("/", async (req, res) => {
  
//   const products = await productModel.find({});
//   res.send(products);
// });


// search products
// productController.get("/", async (req, res) => {
// const {query} = req.query;
//   // console.log(query)
  
//   try {
//     let Products = await productModel.find(query);
  
//     res.json(Products);
//     console.log(Products)
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// Blush category
productController.get("/blush", async (req, res) => {
    const products = await productModel.find({product_type:"blush"});
    res.send(products);
  });

// Bronzer category
productController.get("/bronzer", async (req, res) => {
    const products = await productModel.find({product_type:"bronzer"});
    res.send(products);
  });

// Eyebrow category
productController.get("/eyebrow", async (req, res) => {
    const products = await productModel.find({product_type:"eyebrow"});
    res.send(products);
  });


  // Eyeliner category
productController.get("/eyeliner", async (req, res) => {
    const products = await productModel.find({product_type:"eyeliner"});
    res.send(products);
  });


  // Eyeshadow category
productController.get("/eyeshadow", async (req, res) => {
    const products = await productModel.find({product_type:"eyeshadow"});
    res.send(products);
  });


    // Foundation category
productController.get("/foundation", async (req, res) => {
    const products = await productModel.find({product_type:"foundation"});
    res.send(products);
  });


    // Lip liner category
productController.get("/lip_liner", async (req, res) => {
    const products = await productModel.find({product_type:"lip_liner"});
    res.send(products);
  });


      // Lipstick category
productController.get("/lipstick", async (req, res) => {
    const products = await productModel.find({product_type:"lipstick"});
    res.send(products);
  });


        // Mascara category
productController.get("/mascara", async (req, res) => {
    const products = await productModel.find({product_type:"mascara"});
    res.send(products);
  });


         // Nail polish category
productController.get("/nail_polish", async (req, res) => {
    const products = await productModel.find({product_type:"nail_polish"});
    res.send(products);
  });



// CRUD start below *************************** 


productController.post("/create", async (req, res) => {
  const {
    id,
    brand,
    name,
    price,
    price_sign,
    currency,
    image_link,
    product_link,
    website_link,
    description,
    rating,
    category,
    product_type,
    tag_list,
    created_at,
    updated_at,
    product_api_url,
    api_featured_image,
    product_colors,
  } = req.body;

  const note = new productModel({
    id,
    brand,
    name,
    price,
    price_sign,
    currency,
    image_link,
    product_link,
    website_link,
    description,
    rating,
    category,
    product_type,
    tag_list,
    created_at,
    updated_at,
    product_api_url,
    api_featured_image,
    product_colors,
  });
  try {
    await note.save();
    res.send("note created");
  } catch (err) {
      console.log(err)
    res.send("something went wrong");
  }
});

productController.delete("/delete/:productId", async (req, res) => {
  const { productId } = req.params;
  const deleteproduct = await productModel.findOneAndDelete({
    _id: productId,
    userId: req.body.userId,
  });
  if (deleteproduct) {
    res.send("Deleted");
  } else {
    res.send("couldn't delete");
  }
});

productController.patch("/edit/:productId", async (req, res) => {
  const { productId } = req.params;

  const updateProduct = await productModel.findOneAndUpdate(
    { _id: productId, userId: req.body.userId },
    { ...req.body }
  );
  if (updateProduct) {
    res.send("updated");
  } else {
    res.send("couldn't update");
  }
});

module.exports = {
  productController
};