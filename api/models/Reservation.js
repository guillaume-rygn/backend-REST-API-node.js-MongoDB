import mongoose from "mongoose";
const { Schema } = mongoose;

const ReservationSchema = new mongoose.Schema({
  name:{
    type:String,
    require: true
  },

  start_date:{
    type: Date,
    require: true
  },
  end_date:{
    type: Date,
    require: true
  }}, 
  {
    timestamps: true
  }
)

export default mongoose.model("Reservation", ReservationSchema)