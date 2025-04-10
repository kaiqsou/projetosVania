import express from "express";                   // express = framework pra desenvolvimento
import cors from "cors";                         // rodar duas aplicações diferentes no mesmo servidor
import routes from "./Routers/User/routes.js";   // rotas
import routesPet from "./Routers/Pet/routesPet.js";

const app = new express();      // instanciar objeto do express

app.use(express.json());        // toda mensagem trocada será em json
app.use(cors({                  // cors frontend
    credentials: true, origin: "http://localhost:3000"
}))

app.use(express.static('public'));
app.use("/users", routes);
app.use("/users", routesPet);

app.listen(5000);       // é a porta utilizada no START