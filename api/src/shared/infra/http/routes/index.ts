import { Router } from "express";

import { ownerRoutes } from "./owner.routes";
import { petRoutes } from "./pets.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use('/owners', ownerRoutes);
routes.use('/pets', petRoutes);
routes.use('/users', userRoutes);

export { routes };