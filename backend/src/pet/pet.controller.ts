import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'; 
import { Pet } from './entities/pet.entity'; 

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo pet' })
  @ApiBody({ type: CreatePetDto }) 
  @ApiResponse({ status: 201, description: 'Pet criado com sucesso', type: Pet })
  @ApiResponse({ status: 400, description: 'Requisição mal formada' })
  create(@Body() createPetDto: CreatePetDto) {
    console.log("chamou aqui")
    console.log(createPetDto)
    return this.petService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pets' })
  @ApiResponse({ status: 200, description: 'Lista de pets', type: [Pet] })
  findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pet por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pet' }) 
  @ApiResponse({ status: 200, description: 'Pet encontrado', type: Pet })
  @ApiResponse({ status: 404, description: 'Pet não encontrado' })
  findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar dados do pet' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pet' })
  @ApiBody({ type: CreatePetDto }) 
  @ApiResponse({ status: 200, description: 'Pet atualizado', type: Pet })
  @ApiResponse({ status: 404, description: 'Pet não encontrado' })
  update(@Param('id') id: string, @Body() createPetDto: CreatePetDto) {
    return this.petService.update(id, createPetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar pet por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pet' })
  @ApiResponse({ status: 200, description: 'Pet deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Pet não encontrado' })
  remove(@Param('id') id: string) {
    return this.petService.remove(id);
  }
}
