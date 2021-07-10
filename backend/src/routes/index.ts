import { Router } from 'express';

import petsRoutes from './petsRoutes';

const routes = Router();

routes.use('/pets', petsRoutes);

export default routes;
