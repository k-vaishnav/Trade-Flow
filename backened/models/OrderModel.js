import mongoose from "mongoose";
import OrderSchema from "../schemas/OrdersSchema.js";

const OrderModel = mongoose.model('Order',OrderSchema);

export default OrderModel;
