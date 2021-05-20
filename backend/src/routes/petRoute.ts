import express from "express";
import { PetController } from "../controller/PetController";

export const petRoute = express.Router();

petRoute.get("/", new PetController().getPets);
petRoute.post("/create", new PetController().registerPet);
petRoute.put("/update/:id", new PetController().updatePet);
petRoute.delete("/delete/:id", new PetController().deletePet);
