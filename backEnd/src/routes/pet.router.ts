import { Router } from "express";
import { PetController } from "../controllers/Pet.controller";

const router = Router()
const petController = new PetController()

router.post("/createPet" , petController.handle)
router.get("/handlePet" , petController.getAllPets)
router.get("/handlePet/search/:id" , petController.getPetById )
router.delete("/handlePet/:id" , petController.deletePetById)

export default router