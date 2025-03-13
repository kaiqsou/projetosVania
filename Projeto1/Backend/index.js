import express from "express";
import cors from "cors";
import routes from "./Routers/User/routes.js";
const app = new express();
//mensagem json
app.use(express.json());
//cors frontend
app.use(cors({
    credentials:true, origin:"http://localhost:3000"
}))

app.use("/users", routes);

app.listen(5000);