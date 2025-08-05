import { Module } from '@nestjs/common';
import { DonoService } from './dono.service';
import { DonoController } from './dono.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [DonoController],
  providers: [DonoService, PrismaService],
})
export class DonoModule {}
