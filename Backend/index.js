const express = require("express")
const cors = require("cors")

const {connection} = require("./Config/db")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res) => {
    res.send("WELCOME TO BEAUTYHOLIC SERVER")
})

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