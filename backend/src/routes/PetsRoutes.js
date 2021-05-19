const express = require('express');
const router = express.Router();

const PetController = require('../controller/PetController');
const PetValidation = require('../middlewares/PetValidation');

router.get('/', PetController.all);
router.post('/', PetValidation, PetController.create);
router.put('/:id', PetController.update);
router.get('/:id', PetController.show);
router.delete('/:id', PetController.delete);

module.exports = router;