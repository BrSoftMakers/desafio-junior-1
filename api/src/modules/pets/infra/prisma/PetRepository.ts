import { Pet } from "@prisma/client";

import { prisma } from "../../../../shared/infra/prisma/prisma";

import { IPetRepository } from "../../repositories/IPetRepository";

import { PetDTO } from "../../dtos";

export class PetRepository implements IPetRepository {
  async list(skip: number): Promise<{ pets: Pet[], total: number}> {
    const petsAll = await prisma.pet.findMany();
    let total = 0; 
    petsAll.map((pet: Pet) => total++);

    const pets = await prisma.pet.findMany({
      skip,
      take: 4,
      include: {Owner: true }
    });

    return {
      pets,
      total
    }
  }

  async findById(id: string): Promise<Pet | null> {
    const pet = await prisma.pet.findUnique({ where: { id } });

    if ( !pet ) throw new Error();

    return pet;
  }

  async create(data: PetDTO): Promise<void> {
    await prisma.pet.create({ data });
  }

  async update(data: PetDTO, id: string): Promise<void> {
    await this.findById(id) 

    await prisma.pet.update({ where: {
      id
    }, data });
  }

  async destroy(id: string): Promise<void> {
    await this.findById(id)

    await prisma.pet.delete({ where: {
      id
    } });
  }
}