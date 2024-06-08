import mongoose from 'mongoose';
const subtodoSchema = new mongoose.Schema(
  {
    Content: {
      type: String,
      requird: true,
    },
    Complete: {
      typeof: Boolean,
      default: false,
    },
    creatBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Subtodo = mongoose.model('Subtodo', subtodoSchema);
