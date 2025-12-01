import express from "express";
import { addHoldings,allHoldings ,newHolding , sellHolding} from "../controllers/holdingsController.js";
const router = express.Router();

router.post("/addHoldings", addHoldings);
router.get("/allHoldings", allHoldings);
router.post("/newHolding", newHolding);
router.post("/sellHolding", sellHolding);
export default router;