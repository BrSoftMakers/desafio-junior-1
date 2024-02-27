import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';
import { PetController } from './pet.controller'; // Importe o PetController

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet]),
  ],
  providers: [PetService],
  controllers: [PetController], // Registre o PetController no módulo
})
export class PetModule {}
