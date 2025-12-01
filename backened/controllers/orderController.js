import {addOrder, getOrders} from "../repositories/orderRepository.js";

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

const getAllOrders = async (req, res) =>{
  try{
    return res.status(200).json(await getOrders());
  }
  catch(e){
    return res.status(500).send("Server Error");
  }
}
 export {newOrder ,getAllOrders};