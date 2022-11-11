const express = require("express");

const cart = require("../Model/cart.model");
const Cartrouter = express.Router();

Cartrouter.get("/", async (req, res) => {
  try {
    const carts = await cart.find().lean().exec();
    console.log(carts);
    return res.status(201).send(carts);
  } catch (err) {
    return res.status(500).send({ message: "Error", error: "err.message" });
  }
});

Cartrouter.get("/:id", async (req, res) => {
  try {
    const carts = await cart.findById(req.params.id).lean().exec()
    return res.status(201).send(carts)
  } catch (err) {
    return res.status(500).send({ message: "Error", error: "err.message" });
  }
});

Cartrouter.post('/create', async (req, res) => {
    try{
        const carts = await cart.create({data:req.body});
        return res.status(200).send(cart)
    }catch(err){
        res.status(500).send({ message: "Error", error: "err.message" })
    }
})

Cartrouter.delete("/:id", async (req,res) => {
    try{
        const carts = await cart.findByIdAndDelete(req.params.id)
        const Carts = await cart.find().lean().exec()
        res.status(200).send({ message: "Error", error: "err.message" })
    }
    catch(err){
        return res.status(500).send({ message: "Error", error: "err.message" })
    }
})

module.exports = Cartrouter