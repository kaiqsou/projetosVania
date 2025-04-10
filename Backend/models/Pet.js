import mongoose from "../db/conn.js";

const {Schema}= mongoose;           
const userSchema = new Schema({          // esquema para definir o usuário
    nome:{
        type: String
    },
    idade:
    {
        type: String
    },
    raca:
    {
        type: String,
    },
    corPredominante:
    {
        type: String,
        required: true
    },
    corOlhos:
    {
        type: String,
        required: true
    },
    genero:
    {
        type: String
    },
    porte:
    {
        type: String,
        required: true
    },
    local:
    {
        type: String
    },
    pontoReferencia:
    {
        type: String,
        required: true
    },
    data:
    {
        type: Date,
        required: true
    },
    recompensa:
    {
        type: String
    }, 
    situacao:
    {
        type: String,
        required: true
    }, 
    imagem:
    {
        type: Array,
        required: true
    }, 
    comentario:
    {
        type: String
    },
    especie:
    {
        type: String
    },
    user:
    {
        type: Object
    }
}, {timestamps: true});     

const Pet = mongoose.model('Pet', petSchema);         // vai usar o esquema criado para o model
export default Pet;                                     // export para ser usado