import UserModel from "../models/UserModel.js";

export const signupUser = async(data) => {
    try{
        const existing = await UserModel.findOne({email: data.email});
        if(existing){
            throw new Error("User already exists");
        }
        const newUser = new UserModel(data);
        await newUser.save();
        return newUser;
    }
    catch(e){
        console.log(e);
        throw e;
    }
}


export const loginUser = async(email) => {
    try{
        return await UserModel.findOne({email: email});
    }
    catch(e){
        throw e;
    }
}