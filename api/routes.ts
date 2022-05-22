import { Router} from "express";
import PetController from "./src/controllers/PetController";

const routes = Router();

routes.post('/pets', PetController.create);
routes.get('/pets', PetController.list);
routes.delete('/pets/:id', PetController.destroy);
routes.put('/pets/:id', PetController.update);

export default routes;
