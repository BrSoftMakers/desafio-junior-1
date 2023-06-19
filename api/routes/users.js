import express from "express";
import { getTutores, addTutores, updateTutores, deleteTutores } from "../controllers/tutores.js";

const router = express.Router();

router.get("/", getTutores);
router.post("/", addTutores);
router.put("/:id", updateTutores);
router.delete("/:id", deleteTutores);

export default router;