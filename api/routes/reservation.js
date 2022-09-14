import express from "express"
import Reservation from "../models/Reservation.js"
const router = express.Router()



//CREATE
router.post("/", async (req, res, next) => {
  
  const newReservation = new Reservation(req.body)
  
  try{
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch(err){
    next(err);
  }
})

//UPDATE
router.put("/:id", async (req, res, next) => {  
  try{
    const updateReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(updateReservation);
  } catch(err){
    next(err);
  }
})

//DELETE
router.delete("/:id", async (req, res, next) => {  
  try{
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json("Reservation has been deleted!");
  } catch(err){
    next(err);
  }
})

//SHOW
router.get("/:id", async (req, res, next) => {  
  try{
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch(err){
    next(err);
  }
})

//INDEX
router.get("/", async (req, res, next) => {  
  try{
    const reservations = await Reservation.find();
    res.status(200).json({"reservations": reservations});
  } catch(err){
    next(err);
  }
})

export default router
