import { Owner } from "@prisma/client";
import { prisma } from "../../../../shared/infra/prisma/prisma";
import { OwnerDTO } from "../../dtos";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

export class OwnerRepository implements IOwnerRepository {
  async create(data: OwnerDTO): Promise<string> {
    const owner = await prisma.owner.findFirst({ where: {
      name: data.name
    }});

    if (owner) return owner.id;

    const { id } = await prisma.owner.create({ data });

    return id
  }

  async findById(id: string): Promise<Owner | null> {
    const owner = await prisma.owner.findUnique({ where: { id } })
  
    if ( !owner ) throw new Error();

    return owner;
  }

  async update(id: string, data: OwnerDTO): Promise<void> {
    await prisma.owner.update({ where: {
      id
    }, data })
  }

  async destroy(id: string): Promise<void> {
    await prisma.pet.deleteMany({ where: { ownerId: id } })
    await prisma.owner.delete({ where: { id }})
  }
}