const database = require("../models");

class AnimalController {
  static async pegaTodosAnimais(req, res) {
    const todosAnimais = await database.Animais.findAll();
    return res.status(200).json(todosAnimais);
  }
}

module.exports = AnimalController;
