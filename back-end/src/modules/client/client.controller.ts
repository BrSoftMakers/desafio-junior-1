import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get()
  async findAll() {
    const clients = await this.clientService.findALl();
    return clients;
  }

  @Put(':id/:ownerId')
  async update(
    @Param('id') id: number,
    @Param('ownerId') ownerId: number,
    @Body() data: ClientDTO,
  ) {
    return await this.clientService.update(id, ownerId, data);
  }

  @Delete(':id/:ownerId')
  async delete(@Param('id') id: number, @Param('ownerId') ownerId: number) {
    return await this.clientService.delete(id, ownerId);
  }
}
