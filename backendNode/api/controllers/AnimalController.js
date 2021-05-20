const database = require("../models");

class AnimalController {
  static async pegaTodosPets(req, res) {
    try {
      const todosAnimais = await database.Animals.findAll();
      return res.status(200).json(todosAnimais);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmPet(req, res) {
    const { id } = req.params;
    try {
      const umPet = await database.Animals.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umPet);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaUmPet(req, res) {
    const novoPet = req.body;
    try {
      const novoPetCriado = await database.Animals.create(novoPet);
      return res.status(200).json(novoPetCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaPet(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Animals.update(novasInfos, { where: { id: Number(id) } });
      const petAtualizado = await database.Animals.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(petAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaPet(req, res) {
    const { id } = req.params;
    try {
      await database.Animals.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `O id ${id} foi excluído` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AnimalController;
