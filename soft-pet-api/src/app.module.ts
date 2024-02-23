import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { PetsModule } from './modules/pets/main/pets.module';

@Module({
  imports: [PrismaModule, PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
