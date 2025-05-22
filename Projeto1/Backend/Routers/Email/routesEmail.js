import{Router} from "express";
import EmailController from "../../controllers/EmailController.js";
import verifyToken from "../../helpers/verify-token.js";

const routesEmail = Router();
routesEmail.post('/Send', verifyToken, EmailController.send);

export default routesEmail;