import express from "express";
import { getTutores } from "../controllers/tutores.js";
import { getPets } from "../controllers/pets.js";

const router = express.Router();

router.get("/", getTutores);

export default router;