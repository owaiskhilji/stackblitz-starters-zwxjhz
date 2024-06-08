import mongoose from 'mongoose';

// MINI SCHEMA
const oderitemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
// 2nd mini schema
const addressSchema = new mongoose.Schema({
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

const orderSchema = new mongoose.Schema(
  {
    oderPrice: {
      type: Number,
      default: false,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    oderitems: {
      // niche parho
      type: [oderitemsSchema],
    },
    address: {
      type: [addressSchema],
    },
    status: {
      type: String,
      // choicees k liye
      enum: ['PENDING', 'CANCELED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model('Oder', orderSchema);

// oderitems me do chize chaye 1) product 2) quantity to is k liye do treeke bna ne ya to miniSchema  bna do ya arry me multiple objects bna do
