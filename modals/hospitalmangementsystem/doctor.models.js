import mongoose, { model } from 'mongoose';
const hosptalschema = new mongoose.Schema({
  multipleHospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
  time: {
    type: Number,
    default: 0,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },

    workinYears: {
      type: String,
      numder: 0,
    },
    workInHospital: [hosptalschema],
  },
  { timestamps: true }
);
export const Doctor = mongoose.model('Doctor', doctorSchema);
