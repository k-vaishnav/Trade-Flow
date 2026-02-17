import {
  addOrder,
  getOrders,
  updateOrderById,
  deleteOrderById,
} from "../repositories/orderRepository.js";

const newOrder = async (req, res) => {
  try {
    await addOrder({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    return res.status(201).send("Order Saved!");
  } catch (e) {
    return res.status(500).send("Server Error");
  }
};

const getAllOrders = async (req, res) => {
  try {
    return res.status(200).json(await getOrders());
  } catch (e) {
    return res.status(500).send("Server Error");
  }
};

const updateOrder = async (req, res) => {
  try {
    const updated = await updateOrderById(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(updated);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server Error" });
  }
};

// DELETE
const deleteOrder = async (req, res) => {
  try {
    await deleteOrderById(req.params.id);
    return res.status(200).json({ message: "Order Deleted" });
  } catch (e) {
    return res.status(500).json({ message: "Server Error" });
  }
};
export { newOrder, getAllOrders, updateOrder, deleteOrder };
