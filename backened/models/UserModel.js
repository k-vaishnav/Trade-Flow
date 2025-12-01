import mongoose from "mongoose";
import userSchema from "../schemas/UserSchema.js";

const UserModel = mongoose.model("User",userSchema) ;

export default UserModel;