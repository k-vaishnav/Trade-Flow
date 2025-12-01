import mongoose from "mongoose";
import positionSchema from "../schemas/PositionSchema.js";
const positionModel = mongoose.model("Position",positionSchema);
export default positionModel;