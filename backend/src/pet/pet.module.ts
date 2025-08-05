import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PetController],
  providers: [PetService, PrismaService],
})
export class PetModule {}
