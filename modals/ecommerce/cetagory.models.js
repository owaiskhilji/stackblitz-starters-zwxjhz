import mongoose from 'mongoose';
const cetegorySchema = new mongoose.Schema(
  {
    cetegory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Cetegory = mongoose.model('Cetegory', cetegorySchema);
