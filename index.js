const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()

dotenv.config()

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (err) {
    throw err;
  }
};


app.listen(3000, () => {
  connect();
  console.log("Connected to Backend")
})