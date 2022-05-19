import { Router} from "express";
import DogController from "./controllers/DogController";

const routes = Router();

routes.post('/dogs', DogController.create);

export default routes;