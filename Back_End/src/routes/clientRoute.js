const express = require('express');

const clienteController = require('../controllers/clientController');

const router = express.Router();

router.get('/', clienteController.getCliente);
router.get('/:id', clienteController.getClienteById);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;