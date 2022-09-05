import { Repository, EntityRepository } from 'typeorm';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { ShowClientDto } from './dto/show-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DeleteClientDto } from './dto/delete-client.dto';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async storeClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.create(createClientDto);

    try {
      return await client.save();
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Email já existe');
      else throw new InternalServerErrorException();
    }
  }

  async listClients(): Promise<Client[]> {
    try {
      return this.find();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async showClient(showClientDto: ShowClientDto): Promise<Client> {
    try {
      const client = await this.findOne({
        where: { id: showClientDto.id },
      });

      if (!client) {
        throw new BadRequestException('Cliente não encontrado');
      }

      return client;
    } catch (error) {
      throw error;
    }
  }

  async updateClient(updateClientDto: UpdateClientDto, id: number) {
    try {
      await this.showClient({ id });

      return this.update({ id }, updateClientDto);
    } catch (error) {
      throw error;
    }
  }

  async deleteClient(deleteClientDto: DeleteClientDto) {
    try {
      await this.showClient({ id: deleteClientDto.id });

      return this.delete({ id: deleteClientDto.id });
    } catch (error) {
      throw error;
    }
  }
}
