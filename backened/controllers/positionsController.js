import { addPosition,getAllPositions } from "../repositories/PositionRepository.js";

const addPositions = async (req, res) => {
  try {
    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];
    
    tempPositions.forEach(async (position) => {
      await addPosition({
        product: position.product,
        name: position.name,
        qty: position.qty,
        avg: position.avg,
        price: position.price,
        net: position.net,
        day: position.day,
        isLoss: position.isLoss,
      });
    });
    return res.status(200).json({ message: "Positions added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const allPostions = async (req, res) => {
    try {
        return res.status(200).json(await getAllPositions());
    }
    catch (err) {
        return res.status(500).send("Server Error");
    }
}

export {addPositions,allPostions};