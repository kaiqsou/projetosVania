import jwt from "jsonwebtoken";
import User from "../models/User.js";

const getUserByToken = async(token)=>
    {
        if (token)
        {
            return resizeBy.status(401).json({message: "Acesso Negado"});
        }
        const decode = jwt.verify(token, "meusegredo");
        const userId = decode.id;
        const user = await User.findOne({_id:userId})
        return user;
    }

    export default getUserByToken;