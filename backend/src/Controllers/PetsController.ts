import { getCustomRepository } from 'typeorm';
import PetsRepository from '../repositories/PetsRepository';
import Pet from '../models/Pet';
import AppError from '../errors/AppError';

export default class PetsController {
  public async show(): Promise<Pet[]> {
    const petsRepository = getCustomRepository(PetsRepository);

    const pets = await petsRepository.find();
    return pets;
  }

  public async showById(id: string): Promise<Pet> {
    const petsRepository = getCustomRepository(PetsRepository);

    const petFind = await petsRepository.findById(id);

    if (!petFind) {
      throw new AppError('Pet not found.');
    }

    return petFind;
  }

  public async create(data: Omit<Pet, 'id'>): Promise<Pet> {
    const petsRepository = getCustomRepository(PetsRepository);

    const pet = petsRepository.create({
      pet_name: data.pet_name,
      age: data.age,
      specie: data.specie,
      breed: data.breed,
      owner_name: data.owner_name,
      phone_number: data.phone_number,
    });

    await petsRepository.save(pet);

    return pet;
  }

  public async update(data: Pet): Promise<Pet | undefined> {
    const petsRepository = getCustomRepository(PetsRepository);

    const petFind = await petsRepository.findById(data.id);

    if (!petFind) {
      throw new AppError('Pet not found.');
    }

    const update = await petsRepository.save(data);

    return update;
  }

  public async delete(id: string): Promise<Pet[]> {
    const petsRepository = getCustomRepository(PetsRepository);

    const petFind = await petsRepository.findById(id);

    if (!petFind) {
      throw new AppError('Pet not found.');
    }

    await petsRepository.delete({ id });

    const pets = await petsRepository.find();
    return pets;
  }
}
