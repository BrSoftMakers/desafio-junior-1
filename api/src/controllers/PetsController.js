import Animal from '../models/Animal';

class PetsController {

  // CREATE
  async store(req, res) {
    console.log(req.body);
    try {
      const novoPet = await Animal.create(req.body);
      const { nome, idade, tipo, raca, contato, endereco } = novoPet;
      return res.json({ nome, idade, tipo, raca, contato, endereco });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const pets = await Animal.findAll({ attributes: ['id', 'nome', 'idade', 'tipo', 'raca', 'contato', 'endereco'] });
      return res.json(pets);
    } catch (e) {
      return res.json(null);
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const pet = await Animal.findByPk(req.params.id);

      const { id, nome, idade, tipo, raca } = pet;
      return res.json({ id, nome, idade, tipo, raca, contato, endereco });
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const pet = await Animal.findByPk(req.params.id);

      if (!pet) {
        return res.status(401).json({
          errors: ['Pet not found'],
        });
      }

      const novoPet = await pet.update(req.body);

      console.log(req.body);

      const { nome, idade, tipo, raca, contato, endereco } = novoPet;
      return res.json({ nome, idade, tipo, raca, contato, endereco });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const pet = await Animal.findByPk(req.params.id);

      if (!pet) {
        return res.status(401).json({
          errors: ['Pet not found'],
        });
      }

      await pet.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new PetsController();
