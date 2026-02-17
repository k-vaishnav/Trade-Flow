import OrderModel from "../models/OrderModel.js";
export const addOrder = async (data) =>{
    try{
        let newOrder = new OrderModel(data);
        await newOrder.save();
        
        console.log ("Order saved");
    }
    catch(e){
        console.log(e);
    }
}   

export const getOrders = async () =>{
    return await OrderModel.find({});
}

export const updateOrderById = async (id,data) =>{
    return await OrderModel.findByIdAndUpdate(id,data,{new:true});
}

export const deleteOrderById = async (id) =>{
    return await OrderModel.findByIdAndDelete(id);
}
