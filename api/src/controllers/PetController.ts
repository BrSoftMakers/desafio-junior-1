import { Request, Response } from "express";
import { randomUUID } from 'crypto';

import { petRepository } from "../database/data-source";
import { Pet } from "../entities/Pet";
import { PetDTO } from "../dtos";

class PetController {
  async create(request: Request, response: Response) {
    const data: PetDTO = request.body;

    const pet = Object.assign({
      id: randomUUID(),
      created_at: new Date(),
      updated_at: new Date(),
      ...data
    } , Pet);

    await petRepository.save(pet);

    return response.status(201).send();
  }

  async list(request: Request, response: Response) {
    const dogs = await petRepository.find();

    return response.status(200).json(dogs);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const data: PetDTO = request.body;

    const petExists = await petRepository.findOneBy({ id });

    if(!petExists) {
      return response.status(404).json({
        message: 'Pet no exists'
      })
    }

    await petRepository.update({ id }, data);

    return response.status(200).send();
  }

  async destroy(request: Request, response: Response) {
    const { id } = request.params;

    await petRepository.delete({ id });

    return response.status(200).send();
  }
}

export default new PetController();
