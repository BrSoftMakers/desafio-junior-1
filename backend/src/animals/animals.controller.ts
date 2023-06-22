import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { AnimalsService } from './animals.service'
import { CreateAnimalDto } from './dto/create-animal.dto'
import { UpdateAnimalDto } from './dto/update-animal.dto'
import { PaginationQueryDto } from 'src/customers/dto/pagination-query.dto'

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto)
  }

  @Get()
  findAll(@Query() paginationQueryParams: PaginationQueryDto) {
    return this.animalsService.findAll(paginationQueryParams)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalsService.update(+id, updateAnimalDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id)
  }
}
