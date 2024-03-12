import { Module } from '@nestjs/common';

import { PetModule } from './Pets/pet.module';


@Module({
  imports: [PetModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule { }