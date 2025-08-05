import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  create(createPetDto: CreatePetDto) {
    return this.prisma.pet.create({
      data: createPetDto,
      include: {
        dono: true,
      },
    });
  }

  findAll() {
    return this.prisma.pet.findMany({
      include: {
        dono: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.pet.findUnique({
      where: { id },
      include: {
        dono: true,
      },
    });
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return this.prisma.pet.update({
      where: { id },
      data: updatePetDto,
      include: {
        dono: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.pet.delete({
      where: { id },
    });
  }
}
