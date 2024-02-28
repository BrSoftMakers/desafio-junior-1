/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() pet: Pet) {
    return this.petsService.create(pet);
  }
  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() pet: Pet) {
    return this.petsService.update(id, pet);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}
