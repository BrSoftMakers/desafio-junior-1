const express = require('express');
// const { route } = require('../app');
const router = express.Router();
const animalsController = require('../controllers/animals');



// Rotas padrões


router.get('/:id', animalsController.editPet);









module.exports = router;