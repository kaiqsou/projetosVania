import mongoose from "../db/conn.js";

const {Schema}= mongoose;           
const userSchema = new Schema({          // esquema para definir o usuário
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
});

const User = mongoose.model('User', userSchema);         // vai usar o esquema criado para o model
export default User;                                     // export para ser usado