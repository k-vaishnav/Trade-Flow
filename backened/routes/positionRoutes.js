import express from "express";
import { addPositions,allPostions } from "../controllers/positionsController.js";
const Positionrouter = express.Router();

Positionrouter.get("/addPositions", addPositions);
Positionrouter.get("/allPositions", allPostions);

export default Positionrouter;