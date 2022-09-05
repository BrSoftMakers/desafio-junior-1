import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientRepository } from './clients.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { ShowClientDto } from './dto/show-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DeleteClientDto } from './dto/delete-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  createClient(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientRepository.storeClient(createClientDto);
  }

  listClients(): Promise<Client[]> {
    return this.clientRepository.listClients();
  }

  showClient(showClientDto: ShowClientDto): Promise<Client> {
    return this.clientRepository.showClient(showClientDto);
  }

  updateClient(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.updateClient(updateClientDto, id);
  }

  deleteClient(deleteClientDto: DeleteClientDto) {
    return this.clientRepository.deleteClient(deleteClientDto);
  }
}
