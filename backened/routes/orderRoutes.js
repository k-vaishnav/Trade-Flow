import express from 'express'
import { newOrder,getAllOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post("/newOrder",newOrder);
orderRouter.get("/allOrders",getAllOrders);

export default orderRouter;
