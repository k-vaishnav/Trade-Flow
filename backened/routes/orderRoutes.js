import express from 'express'
import { newOrder,getAllOrders } from '../controllers/orderController.js';
import {authMiddleware} from '../middleware/Auth.js';

const orderRouter = express.Router();

orderRouter.post("/newOrder",authMiddleware, newOrder);
orderRouter.get("/allOrders",authMiddleware,getAllOrders);

export default orderRouter;
