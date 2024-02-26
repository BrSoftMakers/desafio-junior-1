import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get('take/:take/skip/:skip/:filter?')
  async findAll(
    @Param('take') take: string,
    @Param('skip') skip: string,
    @Param('filter') filter?: string,
  ) {
    return await this.petService.findAllPets(take, skip, filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }
  @Get('find/:name')
  find(@Param('name') name: string) {
    return this.petService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: CreatePetDto) {
    return this.petService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(id);
  }
}
