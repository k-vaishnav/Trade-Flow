import express from 'express'
import { newOrder,getAllOrders, updateOrder, deleteOrder } from '../controllers/orderController.js';
import {authMiddleware} from '../middleware/Auth.js';

const orderRouter = express.Router();

orderRouter.post("/newOrder",authMiddleware, newOrder);
orderRouter.get("/allOrders",authMiddleware,getAllOrders);
orderRouter.put("/:id", authMiddleware, updateOrder);
orderRouter.delete("/:id", authMiddleware, deleteOrder);

export default orderRouter;
