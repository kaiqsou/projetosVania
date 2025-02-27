import User from "../models/User.js";
import Argon2 from "argon2";

export default class UserController{        // feita para poder fazer import dela
    // método registro
    static async register(req, res) // req = requisiçao | res = resposta
    {
        // res.json({message:"Olá"}); - responde a mensagem - testado no Postman
        const{name, email, phone, password, confirmPassword} = req.body;
        // validar
        if(!name)
        {
            res.status(422).json({message:"o nome é obrigatório!"})
            return;
        }

        if(!email)
        {
            res.status(422).json({message:"o email é obrigatório!"})
            return;
        }

        // verificar se já tem um usuario com o mesmo email
        try 
        {
            const userExist = await User.findOne({email:email});
            if (userExist)
            {
                res.status(422).json({message:"o email já é cadastrado!"})   
            }
            
            // criptografar a senha antes de salvar
            const passwordHash = await Argon2.hash(password,{
                type: Argon2.argon2id,
                memoryCost: 2**16,                          // defesa para dificultar ataque
                parallelism: 1
            });

            // salvar o usuário
            const user = new User({
                name,
                email,
                phone,
                password:passwordHash
            });

            try 
            {
                const newUser = await user.save();
                return  
            }
            catch (error) 
            {
                return req.status(500).json({message:"Erro! Tente novamente mais tarde"})
            }
            

        }
        catch (error) 
        {
            return req.status(500).json({message:"Erro! Tente novamente mais tarde"})
        }

        if(!phone)
        {
            res.status(422).json({message:"o telefone é obrigatório!"})
            return;
        }

        if(!password)
        {
            res.status(422).json({message:"a senha é obrigatória!"})
            return;
        }

        if(!password !== confirmPassword)
        {
            res.status(422).json({message:"a senha não é igual!"})
            return;
        }
    }

    static async login(req, res) 
    {
        // res.json({message:"Olá"});
        
    }
}