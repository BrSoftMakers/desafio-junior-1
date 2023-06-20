import express from "express";
import { getTutores, addTutores, updateTutores, deleteTutores } from "../controllers/tutores.js";
import { getPets, addPets, updatePets, deletePets } from "../controllers/pets.js";

const router = express.Router();

router.get("/tutor", getTutores);
router.post("/tutor", addTutores);
router.put("/tutor:id", updateTutores);
router.delete("/tutor:id", deleteTutores);

router.get("/pet", getPets);
router.post("/pet", addPets);
router.put("/pet:id", updatePets);
router.delete("/pet:id", deletePets);


export default router;