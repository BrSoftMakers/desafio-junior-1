import { Request, Response } from "express";
import { dogRepository } from "../database/data-source";
import { Dog } from "../entities/Dog";
import { DogDTO } from "../types";

class DogController {
  async create(request: Request, response: Response) {
    const data: DogDTO = request.body;

    const dog = new Dog();
    dog.dog_name = data.dog_name;
    dog.dog_age = data.dog_age;
    dog.dog_breed = data.dog_breed;
    dog.owner_name = data.owner_name;
    dog.owner_phone = data.owner_phone;

    await dogRepository.save(dog);

    return response.status(201).send();
  }

  async list(request: Request, response: Response) {
    const dogs = await dogRepository.find();

    return response.status(200).json(dogs);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const {
      dog_name,
      dog_age,
      dog_breed,
      owner_name,
      owner_phone
    }: DogDTO = request.body;

    const dog = await dogRepository.findOneBy({ id });

    if(!dog) {
      return response.status(404).json({
        message: 'Dog no exists'
      })
    }

    const dogDataUpdated: DogDTO = {
      dog_name,
      dog_age,
      dog_breed,
      owner_name,
      owner_phone
    }

    await dogRepository.update({ id }, dogDataUpdated);

    return response.status(200).send();
  }

  async destroy(request: Request, response: Response) {
    const { id } = request.params;

    await dogRepository.delete({ id });

    return response.status(200).send();
  }
}

export default new DogController();