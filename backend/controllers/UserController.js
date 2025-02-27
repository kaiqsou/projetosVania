import User from "../models/User.js";

export default class UserController{        // feita para poder fazer import dela
    // método registro
    static async register(req, res) 
    {
        res.json({message:"Olá"});
    }

    static async login(req, res) 
    {
        res.json({message:"Olá"});
    }
}