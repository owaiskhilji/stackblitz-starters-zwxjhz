import mongoose, { model } from 'mongoose';
const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cuty: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  specialization: [
    {
      type: String,
    },
  ],
});
export const Hospital = mongoose.model('Hospital', hospitalSchema);
