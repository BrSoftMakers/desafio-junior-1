const clienteRepository = require('../repositories/clientRepository');

exports.getCliente = async (req, res) => {
    const cliente = await clienteRepository.getCliente();
    res.json(cliente);
}

exports.getClienteById = async (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = await clienteRepository.getClienteById(id);
    res.json(cliente);
}

exports.createCliente = async (req, res) => {
    const cliente = req.body;
    const newCliente = await clienteRepository.createCliente(cliente);
    res.json(newCliente);
}

exports.updateCliente = async (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = req.body;
    const updateCliente = await clienteRepository.updateCliente(id, cliente);
    res.json(updateCliente);
}

exports.deleteCliente = async (req, res) => {
    const id = parseInt(req.params.id);
    await clienteRepository.deleteCliente(id);
    res.json({message: `Cliente ${id} deleted`});
}