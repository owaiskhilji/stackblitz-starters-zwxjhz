// modal structure 3 line me h
// 1st line
import mongoose from 'mongoose';
// 2nd line
const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);
// 3rd line
export const User = mongoose.model('User', userSchema);

// createdat createdupdate
// koi bh apki field jb data base me save ho or ap chate h os time maloom chale to is k liye ap {timestams} ka use kre or ye use ap schema k 2nd object me kre
