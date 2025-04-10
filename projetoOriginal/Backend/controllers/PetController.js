import Pet from "../models/Pet";
import mongoose from "mongoose";
import getToken from "../helpers/get-token";
import getUserByToken from "../helpers/get-user-by-token";

export default class PetController
{
    static async create(req, res)
    {
        // campos no models PET, exceto imagem e user
        const{nome, idade, raca, corPredominante, corOlhos, genero, porte, local, pontoReferencia, data, recompensa, situacao, comentario, especie} = req.body
        // se for mais de uma imagem = req.files (plural), caso contrário, imagem = req.file
        const imagem = req.files;

        // conferindo campos obrigatorios
        if (!corPredominante)
        {
            res.status(422).json({message: "Por favor, preencha a cor predominante."})
            return
        }

        if (imagem.length === 0)
        {
            res.status(422).json({message: "Por favor, acrescente uma imagem."})
            return
        }

        // o verify atua atras dos bastidores, sendo executado antes de chegar aqui, sem a necessidade de utilizá-lo
        const token = getToken(req);
        const user = getUserByToken(token);

        const pet = new Pet
        ({
            nome,
            idade,
            raca,
            corPredominante,
            corOlhos,
            genero,
            porte,
            local,
            pontoReferencia,
            data,
            recompensa,
            situacao,
            comentario,
            especie,
            user:
            {
                _id: user._id,
                name: user.name,
                phone: user.phone,
                email: user.email
            },
            imagem:[],
        });
        
        imagem.map((image) => { pet.imagem.push(image.filename); });

        try 
        {
            const newPet = await pet.save();
            res.status(200).json({message: "Pet inserido com sucesso"}, newPet);
        } 
        catch (error) 
        {
            res.status(500).json({message: error.message}); 
        }
    }

    static async getAll(req, res)
    {
        const pets = await Pet.find({ situacao: {$ne: "Finalizado"} }).sort("-createdAt");     // $ne é "não é finalizado"      // createdAt é a data que foi criado
        res.status(200).json({ pets });
    }
}