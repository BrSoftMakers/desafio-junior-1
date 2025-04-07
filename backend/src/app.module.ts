import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PetModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
