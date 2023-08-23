const express = require('express');

const petController = require('../controllers/petController');

const router = express.Router();

router.get('/', petController.getPet);
router.get('/:id', petController.getPetById);
router.post('/', petController.createPet);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

module.exports = router;