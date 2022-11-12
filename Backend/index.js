const express = require("express");
const cors = require("cors");
const authentication =require("./Middlewares/authenticaton")
const { connection } = require("./Config/db");
require("dotenv").config();

const customerRouter = require("./Routes/user.route");

// const {adminController} = require("./Routes/admin.route");
const {productController} = require("./Routes/product.route");
const {wishListController} = require("./Routes/wishList.route");
const {addcartController} = require("./Routes/addCart.route");



const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WELCOME TO BEAUTYHOLIC SERVER");
});

app.use("/customer", customerRouter);
app.use("/products", productController );


app.use(authentication)
app.use("/wishlist", wishListController);
app.use(authentication)
app.use("/addcart", addcartController);

// app.use("/admin", adminController );


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected To Database");
  } catch (err) {
    console.log("Error is Connecting Database");
    console.log(err);
  }
  console.log(`Server is listening at PORT ${process.env.PORT}`);
});
