import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {  PetsService } from './pets.service';
import { PetDTO } from './pets.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() data: PetDTO) {
    return this.petsService.create(data)
  }

  @Get()
  async findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const petId = +id; 
    return this.petsService.findOne(petId); 
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: PetDTO) {
    const petId = parseInt(id); 
    return this.petsService.update(petId, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const petId = parseInt(id); 
    return this.petsService.delete(petId);
  }
}
