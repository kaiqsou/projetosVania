// import mongoose from "mongoose";
import mongoose from "../db/conn.js";

const {Schema} = mongoose;          // esquema para definir o usuário
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);   // vai usar o esquema criado para o model
export default User;                               // export para ser usado