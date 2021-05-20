const { Router } = require("express");
const AnimalController = require("../controllers/AnimalController");

const router = Router();

router.get("/list", AnimalController.pegaTodosPets);
router.get("/list/:id", AnimalController.pegaUmPet);
router.post("/create", AnimalController.criaUmPet);
router.put("/edit/:id", AnimalController.atualizaPet);
router.delete("/delete/:id", AnimalController.deletaPet);

module.exports = router;
