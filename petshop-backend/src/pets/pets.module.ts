import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetRepository } from './pet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PetRepository])],
  providers: [PetsService],
  controllers: [PetsController],
})
export class PetsModule {}
