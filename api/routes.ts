import { Router} from "express";
import DogController from "./src/controllers/DogController";

const routes = Router();

routes.post('/dogs', DogController.create);
routes.get('/dogs', DogController.list);
routes.delete('/dogs/:id', DogController.destroy);
routes.put('/dogs/:id', DogController.update);

export default routes;