import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    SubRodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('todo', todoSchema);

// ab hme ek esi feild bh bna ni parae gi jis se maloom ho kis user ki todo h h yni jo user signup kre usi ki todo bne ro is k li ek feild (craetdBY) k nam se bnae ge or us me type ek special de ge jo mongoose khud bna ge ga to phr ek (ref)bh de ge file ko file commect krne k iye
// or (ref) me mongoose.method k 1st parameter  ka name de ge
