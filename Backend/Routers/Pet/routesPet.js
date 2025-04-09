import{Router} from "express";
import PetController from "../../controllers/PetController.js";
import verifyToken from "../../helpers/verify-token.js";
import imageUpload from "../../helpers/image-upload.js";

const routes = Router();
routes.post('/Create', verifyToken, imageUpload.array("Imagem"), PetController.create);
routes.get('/getAll', PetController.getAll);

export default routes;