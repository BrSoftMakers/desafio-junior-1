import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ClientDTO } from './client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(data: ClientDTO) {
    const clientExists = await this.prisma.client.findFirst({
      where: { name: data.name, owner: data.owner },
    });

    if (clientExists) throw new Error('client already exists');

    const client = await this.prisma.client.create({ data });

    return client;
  }

  async findALl() {
    const clients = await this.prisma.client.findMany();
    return clients;
  }

  async update(id: number, ownerId: number, data: ClientDTO) {
    const clientExists = await this.prisma.client.findUnique({
      where: {
        id_ownerId: {
          id: Number(id),
          ownerId: Number(ownerId),
        },
      },
    });

    if (!clientExists) {
      throw new Error('Client does not exists!');
    }

    return await this.prisma.client.update({
      data,
      where: {
        id_ownerId: {
          id: Number(id),
          ownerId: Number(ownerId),
        },
      },
    });
  }

  async delete(id: number, ownerId: number) {
    const clientExists = await this.prisma.client.findUnique({
      where: {
        id_ownerId: {
          id: Number(id),
          ownerId: Number(ownerId),
        },
      },
    });

    if (!clientExists) {
      throw new Error('Client does not exists!');
    }

    return await this.prisma.client.delete({
      where: {
        id_ownerId: {
          id: Number(id),
          ownerId: Number(ownerId),
        },
      },
    });
  }
}
