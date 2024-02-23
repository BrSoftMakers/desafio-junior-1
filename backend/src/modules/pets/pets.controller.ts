import { Body, Controller, Post } from '@nestjs/common';
import {  PetsService } from './pets.service';
import { PetDTO } from './pets.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() data: PetDTO) {
    return this.petsService.create(data)
  }
}
