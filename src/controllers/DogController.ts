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
}

export default new DogController();