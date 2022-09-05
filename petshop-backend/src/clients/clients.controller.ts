import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { DeleteClientDto } from './dto/delete-client.dto';
import { ShowClientDto } from './dto/show-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  show(@Param() showClientDto: ShowClientDto) {
    return this.clientService.showClient(showClientDto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  delete(@Param() deleteClientDto: DeleteClientDto) {
    return this.clientService.deleteClient(deleteClientDto);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  put(
    @Body() updateClientDto: UpdateClientDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.clientService.updateClient(id, updateClientDto);
  }

  @Get('/')
  list() {
    return this.clientService.listClients();
  }
}
