import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ClientCreateInput) {
    const clientExists = await this.prisma.client.findFirst({
      where: { name: data.name, owner: data.owner },
    });

    if (clientExists) throw new Error('client already exists');

    const client = await this.prisma.client.create({ data });

    return client;
  }
}
