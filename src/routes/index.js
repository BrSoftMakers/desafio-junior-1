const express = require('express');
// const { route } = require('../app');
const router = express.Router();
const animalsController = require('../controllers/animals');



// Rotas padrões

router.get('/', animalsController.listPet);

router.get('/create', animalsController.create);
router.post('/create', animalsController.sucess);
router.get('/delete/:id', animalsController.deletePet);

router.get('/edit/:id', animalsController.editPet);
router.post('/editPet/:id', animalsController.sucessEdit);



router.get('/:id', animalsController.detailPet);




module.exports = router;