import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';
export const authMiddleware = async (req,res,next) =>{
    const token = req.cookies.jwtToken;
    console.log(token);
    if(!token || token === "null" || token === "undefined") return res.status(401).send("Access Denied");
    try{
        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;
        const user = await UserModel.findById(verified.id);
        if(user) req.user = user;
        else return res.status(401).send("Access Denied");
        next();
    }catch(err){
        res.status(400).send("Invalid Token");
    }
}