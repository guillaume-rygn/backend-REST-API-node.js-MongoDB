import Reservation from "../models/Reservation.js"

//CREATE
export const createReservation = async (req, res, next) => {
  
  const newReservation = new Reservation(req.body)
  
  try{
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch(err){
    next(err);
  }
};

//UPDATE
export const updateReservation = async (req, res, next) => {  
  try{
    const updateReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(updateReservation);
  } catch(err){
    next(err);
  }
};

//DELETE
export const deleteReservation = async (req, res, next) => {  
  try{
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json("Reservation has been deleted!");
  } catch(err){
    next(err);
  }
};

//SHOW
export const showReservation = async (req, res, next) => {  
  try{
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch(err){
    next(err);
  }
};

//INDEX
export const indexReservation = async (req, res, next) => {  
  try{
    const reservations = await Reservation.find();
    res.status(200).json({"reservations": reservations});
  } catch(err){
    next(err);
  }
};
