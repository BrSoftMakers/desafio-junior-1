<<<<<<< HEAD
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
=======
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
>>>>>>> d6cb25f2e463d04041c50124c6f9bccfec9946ab
