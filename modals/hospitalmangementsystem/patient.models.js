import mongoose, { model } from 'mongoose';
const addresspatientSchema = new mongoose.Schema({
  house: {
    type: String,
  },
  block: {
    type: String,
  },
  near: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
});

const patientSchema = new mongoose.Schema({
name : {
  type : String,
  required : true
},
daiginsedWith : {
  type : String,
  required : true
},
address : [addresspatientSchema],
age : {
  type : Number,
  required : true
},
blodGroup :{
  type: String,
  required : true
},
gender : {
  type : String,
  // choice k liye
  enum : ["Male",'Female',"Other"],
  required : true
} ,
admitteIn :{
  type : mongoose.Schema.Types.ObjectId,
  ref : "Hospital"

},{timestamps:true});
export const Patient = mongoose.model('Patient', patientSchema);
