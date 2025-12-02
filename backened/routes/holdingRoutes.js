import express from "express";
import {
  addHoldings,
  allHoldings,
  newHolding,
  sellHolding,
} from "../controllers/holdingsController.js";
import { authMiddleware } from "../middleware/Auth.js";
const router = express.Router();

router.post("/addHoldings", authMiddleware, addHoldings);
router.get("/allHoldings", authMiddleware, allHoldings);
router.post("/newHolding", authMiddleware, newHolding);
router.post("/sellHolding", authMiddleware, sellHolding);
export default router;
