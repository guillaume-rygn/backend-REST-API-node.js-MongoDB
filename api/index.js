import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()

import rooms from "./routes/rooms.js"
import reservations from "./routes/reservation.js"


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

app.use(express.json())

app.use("/api/v1/rooms", rooms)
app.use("/api/v1/reservations", reservations)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong !"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connect();
  console.log("Connected to Backend")
})