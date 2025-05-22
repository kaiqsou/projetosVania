import {nodemailer} from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default class EmailController{
    
    static async send(req,res)
    {
        const {nome, email, mensagem} = req.body;

        try {
            // configuração
            const transporter = nodemailer.createTransporter({
                service:"gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });
            // opções
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Mensagem do meu pet sumiu",
                text: mensagem
            };
            await transporter.sendMail(mailOptions);
            res.status(200).json({message:"E-mail enviado com sucesso"});
        } catch (error) {
            console.error("Erro ao enviar o e-mail", error);
            res.status(500).json({message:"Erro ao enviar o e-mail"});
        }
    }
}