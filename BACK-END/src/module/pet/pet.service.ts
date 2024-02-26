import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/Prisma';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePetDto) {
    const pet = await this.prisma.pet.create({
      data,
    });

    return pet;
  }

  async findAllPets(take: string, skip: string, filter: string) {
    const takeNumber = parseInt(take);
    const skipNumber = parseInt(skip);

    const page = skipNumber * takeNumber;
    const pets = this.prisma.pet.findMany({
      skip: page,
      take: takeNumber,
      where: {
        name: {
          contains: filter,
        },
      },
      orderBy: {
        name: 'desc',
      },
    });
    return pets;
  }

  async findOne(id: string) {
    const pet = await this.prisma.pet.findUnique({
      where: {
        id,
      },
    });

    return pet;
  }

  async findByName(name: string) {
    const pet = await this.prisma.pet.findMany({
      where: {
        name,
      },
    });

    return pet;
  }

  async update(id: string, data: CreatePetDto) {
    const pet = await this.prisma.pet.update({
      data,
      where: {
        id,
      },
    });

    return pet;
  }

  async remove(id: string) {
    return await this.prisma.pet.delete({
      where: {
        id,
      },
    });
  }
}
