import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Post()
  async create(@Body() petData: Pet): Promise<Pet> {
    return this.petService.create(petData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() petData: Pet): Promise<Pet | undefined> {
    const updatedPet = await this.petService.update(id, petData);
    if (!updatedPet) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }
    return updatedPet;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.petService.delete(id);
  }
}
