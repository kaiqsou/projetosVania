import { Router } from "express";
import UserController from "../../controllers/UserController.js";

const routes = Router();

// criando rota: rota + controller + método
routes.post('/Register', UserController.register); 
routes.post('/Login', UserController.login); 

export default routes;
