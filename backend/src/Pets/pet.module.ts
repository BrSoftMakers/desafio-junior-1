import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PetController } from './pet.controller';
import { PetServices } from './pet.service';

@Module({
  imports: [],
  controllers: [PetController],
  providers: [PetServices,PrismaService],
})
export class PetModule {}
