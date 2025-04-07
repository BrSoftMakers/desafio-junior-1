import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pet } from './entities/pet.entity';  

@Module({
  imports: [SequelizeModule.forFeature([Pet])],  
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}