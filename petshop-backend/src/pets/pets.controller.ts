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
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { DeletePetDto } from './dto/delete-pet.dto';
import { ShowPetDto } from './dto/show-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private petService: PetsService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.createPet(createPetDto);
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  show(@Param() showPetDto: ShowPetDto) {
    return this.petService.showPet(showPetDto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  delete(@Param() deletePetDto: DeletePetDto) {
    return this.petService.deletePet(deletePetDto);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  put(
    @Body() updatePetDto: UpdatePetDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.petService.updatePet(id, updatePetDto);
  }

  @Get('/client/:id')
  @UsePipes(ValidationPipe)
  list(@Param('id', ParseIntPipe) clientId: number) {
    return this.petService.listPets({ clientId });
  }
}
