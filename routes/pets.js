const express = require("express");
const router = express.Router();
const methodOverride = require('method-override');

const petController = require("../controllers/petController");

router.use(methodOverride('_method'));
router.use(express.urlencoded({extended: true}));

router.route("/")
.get(petController.pets)

router.route("/:id")
.get(petController.update)
.put(petController.petUpdate)
.delete(petController.petDelete)


module.exports = router;