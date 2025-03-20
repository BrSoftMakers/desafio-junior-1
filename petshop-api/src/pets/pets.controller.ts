import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  async getAll(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<Pet>): Promise<Pet> {
    return this.petsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Pet>): Promise<Pet> {
    return this.petsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return this.petsService.remove(id);
  }
}
