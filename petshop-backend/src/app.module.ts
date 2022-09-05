import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './clients/clients.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, ClientsModule, PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
