const { Router } = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const {wishListModel} = require("../Model/wishList.model");
const wishListController = Router();


wishListController.get("/", async (req, res) => {
  const products = await wishListModel.find({userId:req.body.userId});
  res.send(products);
});

wishListController.post("/create", async (req, res) => {
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
        userId
    } = req.body;
  
    const note = new wishListModel({
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
      userId
    });
    try {
      await note.save();
      res.send("note created");
    } catch (err) {
        console.log(err)
      res.send("something went wrong");
    }
  });


  wishListController.delete("/:productId", async (req, res) => {
    const { productId } = req.params;
    const deleteproduct = await wishListModel.findOneAndDelete({
      _id: productId,
      userId: req.body.userId,
    });
    if (deleteproduct) {
      res.send("Deleted");
    } else {
      res.send("couldn't delete");
    }
  });



module.exports = {
    wishListController
  };