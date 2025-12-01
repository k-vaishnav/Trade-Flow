import HoldingModel from "../models/HoldingModel.js";

const addHolding = async (holding) => {
  const newHolding = new HoldingModel(holding);
  await newHolding.save();
};

const getAllHoldings = async () => {
  return await HoldingModel.find({});
};

const createHolding = async (data) => {
  const existing = await HoldingModel.findOne({ name: data.name });

  if (existing) {
    const oldQty = existing.qty;
    const newQty = data.qty;

    // Correct Weighted Average
    const newAvg =
      (existing.avg * oldQty + data.price * newQty) / (oldQty + newQty);

    existing.qty = oldQty + newQty;
    existing.avg = newAvg;
    existing.price = data.price; // Latest market price

    await existing.save();
    console.log("Holding updated");
    return;
  }

  // New holding
  const newEntry = new HoldingModel({
    name: data.name,
    qty: data.qty,
    avg: data.price,
    price: data.price,
    net: "0%",
    day: "0%",
    isLoss: false,
  });

  await newEntry.save();
  console.log("Holding saved");
};

const sellHolding = async (data) => {
  const existing = await HoldingModel.findOne({ name: data.name });

  if (!existing) {
    console.log("Holding not found");
    return;
  }

  const oldQty = existing.qty;
  const newQty = data.qty;

  if (newQty > oldQty) {
    console.log("Not enough quantity");
    return;
  }

  existing.qty = oldQty - newQty;
  existing.price = data.price;

  if (existing.qty === 0) {
    await HoldingModel.deleteOne({ name: data.name });
    console.log("All quantity sold. Holding removed.");
  }
  await existing.save();
  console.log("Holding updated");
};

export { addHolding, getAllHoldings, createHolding, sellHolding};
