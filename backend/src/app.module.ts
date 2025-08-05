import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DonoModule } from './dono/dono.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [DonoModule, PetModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
