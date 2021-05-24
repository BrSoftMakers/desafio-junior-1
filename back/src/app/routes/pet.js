import { Router } from 'express';

import PetController from '../controllers/PetController';
import { search } from '../middlewares/pet';

const routes = new Router();

routes.get('/pets', search, PetController.index);
routes.get('/pet/:id', PetController.show);
routes.post('/pet', PetController.store);
routes.put('/pet/:id', PetController.update);
routes.delete('/pet/:id', PetController.delete);

export default routes;
