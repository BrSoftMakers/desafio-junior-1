import { Injectable } from '@nestjs/common';
import { CreateDonoDto } from './dto/create-dono.dto';
import { UpdateDonoDto } from './dto/update-dono.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DonoService {
  constructor(private prisma: PrismaService) {}

  create(createDonoDto: CreateDonoDto) {
    return this.prisma.dono.create({
      data: createDonoDto,
    });
  }

  findAll() {
    return this.prisma.dono.findMany({
      include: {
        pets: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.dono.findUnique({
      where: { id },
      include: {
        pets: true,
      },
    });
  }

  update(id: number, updateDonoDto: UpdateDonoDto) {
    return this.prisma.dono.update({
      where: { id },
      data: updateDonoDto,
    });
  }

  remove(id: number) {
    return this.prisma.dono.delete({
      where: { id },
    });
  }
}
