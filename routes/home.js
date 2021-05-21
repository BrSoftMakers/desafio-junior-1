const express = require("express");
const router = express.Router();

const petController = require("../controllers/petController");

router.use(express.urlencoded({extended: true}));

router.route("/")
.get(petController.home)
.post(petController.createPet)

module.exports = router;