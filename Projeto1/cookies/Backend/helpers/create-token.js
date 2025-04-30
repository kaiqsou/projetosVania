import jwt from "jsonwebtoken";
import {promisify} from "util";
const signAsync = promisify(jwt.sign);
const createUserToken = async(user, req, res)=>{
    try
    {
        const token = await signAsync(
            {
            name:user.name,
            id:user._id
            },
            process.env.JWT_SECRET || "meusegredo",
            //{expiresIn:"1h"}
        );
        res.cookie("token", token, {
            httpOnly: true,       // httpOnly impede que scripts maliciosos roubem o cookie
            secure: false,        // segurança por https, como está sendo usado localhost e não https, precisa deixar FALSE
            sameSite: "Strict",
         // maxAge: 3600000       tempo ativo em milissegundos
        })
        res.status(200).json({
            message: "Você está logado",
            token: token,
            userId: user._id
        });
    } 
    catch (error)
    {
       return res.status(500).json({message:"Erro ao gerar token",error});
    }
    
}
export default createUserToken;