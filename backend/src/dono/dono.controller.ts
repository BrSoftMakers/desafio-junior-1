import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonoService } from './dono.service';
import { CreateDonoDto } from './dto/create-dono.dto';
import { UpdateDonoDto } from './dto/update-dono.dto';

@Controller('donos')
export class DonoController {
  constructor(private readonly donoService: DonoService) {}

  @Post()
  create(@Body() createDonoDto: CreateDonoDto) {
    return this.donoService.create(createDonoDto);
  }

  @Get()
  findAll() {
    return this.donoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonoDto: UpdateDonoDto) {
    return this.donoService.update(+id, updateDonoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donoService.remove(+id);
  }
}
