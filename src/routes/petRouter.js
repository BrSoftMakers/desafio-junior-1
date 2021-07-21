const express = require('express');
const router = express.Router()
const petController = require('../controller/petController')

router.get('/', petController.listar);
router.post('/adicionar', petController.adicionar);
router.get('/:id', petController.listarPet);
router.put('/atualizar', petController.atualizar)
router.delete('/deletar/:id', petController.remover);

module.exports = router;