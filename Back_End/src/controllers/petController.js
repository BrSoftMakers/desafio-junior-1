const petRepository = require('../repositories/petRepository');

exports.getPet = async (req, res) => {
    const pet = await petRepository.getPet();
    res.json(pet);
}

exports.getPetById = async (req, res) => {
    const id = parseInt(req.params.id);
    const pet = await petRepository.getPetById(id);
    res.json(pet);
}

exports.createPet = async (req, res) => {
    const pet = req.body;
    const newPet = await petRepository.createPet(pet);
    res.json(newPet);
}

exports.updatePet = async (req, res) => {
    const id = parseInt(req.params.id);
    const pet = req.body;
    const updatePet = await petRepository.updatePet(id, pet);
    res.json(updatePet);
}

exports.deletePet = async (req, res) => {
    const id = parseInt(req.params.id);
    await petRepository.deletePet(id);
    res.json({message: `Pet ${id} deleted`});
}