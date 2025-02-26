import mongoose from "mongoose";

async function main(){
    await moongose.connect('mongodb://localhost:27017/projeto1');
    console.log('conectou Mongoose');
}

main().catch((err) => console.log(err));
export default moongose;