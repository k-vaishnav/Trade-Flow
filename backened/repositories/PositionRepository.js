import PositionModel from "../models/PositionModel.js";

const addPosition = async (position) =>{
    const newPosition = new PositionModel(position);
    await newPosition.save();
}

const getAllPositions = async () => {
    return await PositionModel.find({});
}

export { addPosition, getAllPositions };