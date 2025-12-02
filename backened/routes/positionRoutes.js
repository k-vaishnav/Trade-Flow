import express from "express";
import {
  addPositions,
  allPostions,
} from "../controllers/positionsController.js";
import { authMiddleware } from "../middleware/Auth.js";
const Positionrouter = express.Router();

Positionrouter.get("/addPositions", authMiddleware, addPositions);
Positionrouter.get("/allPositions", authMiddleware, allPostions);

export default Positionrouter;
