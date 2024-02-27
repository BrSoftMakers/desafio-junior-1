import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PetServices } from './pet.service';
import { Pet } from './pet.model';

@Controller('api/v1/pet')

export class PetController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly petservices:PetServices ) {}

  @Get()
  async getAllPets(): Promise<Pet[]> {
    return this.petservices.getAllPets();
  }

 @Post()
  async addPet(@Body() postData:Pet): Promise<Pet> {
    return this.petservices.addPet(postData);
  }
  @Get(':id')
  async getPet(@Param('id') id: number): Promise<Pet | null> {
    return this.petservices.getPet(id);
  }

  @Put(':id')
  async editPet(@Param('id') id: string, @Body() postData:Pet): Promise<Pet> {
    return this.petservices.editPet(id,postData);
  }

  @Delete(':id')
  async removePet(@Param('id') id: number): Promise<Pet | void> {
    return this.petservices.removePet(id);
  }
}
