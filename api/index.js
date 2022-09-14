import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()

import meeting_rooms from "./routes/meeting_rooms.js"

dotenv.config()

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!")
})


//middlewares

app.use("/room", meeting_rooms)



app.listen(3000, () => {
  connect();
  console.log("Connected to Backend")
})