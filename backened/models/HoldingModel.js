import mongoose from "mongoose";
import HoldingSchema from "../schemas/HoldingSchema.js";

const HoldingModel = mongoose.model('Holding',HoldingSchema);

export default HoldingModel;
