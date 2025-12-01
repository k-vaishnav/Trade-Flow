import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URL;
export const connectToDB = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err);
    }
}