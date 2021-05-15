import { Router } from "express";
import mongoose from "mongoose";

import PetsController from "../controllers/PetsController";

const petsRouter = Router();
const conn = mongoose.connection;

conn.once("open", () => console.log("Conectado ao DB"));

petsRouter.get("/", PetsController.index);
petsRouter.get("/dogs", PetsController.indexDog);
petsRouter.get("/cats", PetsController.indexCat);

petsRouter.get("/create", PetsController.showCreate);

petsRouter.post("/", PetsController.create);
petsRouter.delete("/:id", PetsController.delete);
petsRouter.put("/:id", PetsController.update);

export { petsRouter };
