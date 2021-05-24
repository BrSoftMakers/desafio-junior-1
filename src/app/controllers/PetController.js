import PetRepository from '../repositories/PetRepository';

class PetController {
  async index(request, response) {
    try {
      const { limit, page } = request.query;
      const { where } = request;
      const pets = await PetRepository.getAll(limit, page, where);

      return response.json(pets);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const pet = await PetRepository.getOne(id);

      if (!pet) {
        return response.status(404).json({ message: 'Invalid data' });
      }

      return response.json(pet);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, age, specie, breed, owner, phone, img } = request.body;

      if (
        !id ||
        !name ||
        !age ||
        !specie ||
        !breed ||
        !owner ||
        !phone ||
        !img
      ) {
        return response.status(400).json({ message: 'Invalid data' });
      }

      if (typeof age !== 'number') {
        return response.status(400).json({ message: 'Invalid data' });
      }

      const pet = await PetRepository.setUpdate(
        id,
        name,
        age,
        specie,
        breed,
        owner,
        phone,
        img
      );

      if (!pet) {
        return response.status(404).json({ message: 'Invalid data' });
      }

      return response.json(pet);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async store(request, response) {
    try {
      const { name, age, specie, breed, owner, phone, img } = request.body;

      if (!name || !age || !specie || !breed || !owner || !phone || !img) {
        return response.status(400).json({ message: 'Invalid data' });
      }

      if (typeof age !== 'number') {
        return response.status(400).json({ message: 'Invalid data' });
      }

      const data = await PetRepository.create(
        name,
        age,
        specie,
        breed,
        owner,
        phone,
        img
      );

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
  async delete(request, response) {
    try {
      const { id } = request.params;

      await PetRepository.delete(id);

      return response.sendStatus(202);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new PetController();
