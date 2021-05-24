import Pet from '../models/Pet';

class PetRepository {
  async getOne(id) {
    const pet = await Pet.findByPk(id);

    return pet;
  }

  async getAll(limit, page, where) {
    const pets = await Pet.findAndCountAll({
      where,
      limit,
      offset: limit * (page - 1)
    });

    return pets;
  }

  async create(name, age, specie, breed, owner, phone, img) {
    const pet = await Pet.create({
      name,
      age,
      specie,
      breed,
      owner,
      phone,
      img_url: img
    });

    return pet;
  }

  async setUpdate(id, name, age, specie, breed, owner, phone, img) {
    const petId = await Pet.findByPk(id);

    const pet = await Pet.update(
      {
        name,
        age,
        specie,
        breed,
        owner,
        phone,
        img_url: img
      },
      {
        where: {
          id
        },
        returning: true
      }
    );

    return petId ? pet : false;
  }

  async delete(id) {
    if (id) {
      await Pet.destroy({ where: { id } });
      return true;
    } else {
      return false;
    }
  }
}

export default new PetRepository();
