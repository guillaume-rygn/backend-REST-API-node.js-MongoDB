import Room from "../models/Room.js"


//CREATE
export const createRoom = async (req, res, next) => {
  
  const newRoom = new Room(req.body)
  
  try{
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch(err){
    next(err);
  }
};

//UPDATE
export const updateRoom = async (req, res, next) => {  
  try{
    const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(updateRoom);
  } catch(err){
    next(err);
  }
};

//DELETE
export const deleteRoom = async (req, res, next) => {  
  try{
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted!");
  } catch(err){
    next(err);
  }
};

//SHOW
export const showRoom = async (req, res, next) => {  
  try{
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch(err){
    next(err);
  }
};

//INDEX
export const indexRoom = async (req, res, next) => {  
  try{
    const rooms = await Room.find();
    res.status(200).json({"rooms": rooms});
  } catch(err){
    next(err);
  }
};