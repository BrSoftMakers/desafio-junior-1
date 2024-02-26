import { Body, Controller, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDTO } from './client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() data: ClientDTO) {
    const client = await this.clientService.create(data);
    return client;
  }
}
