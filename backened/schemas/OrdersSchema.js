import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

export default OrderSchema;
