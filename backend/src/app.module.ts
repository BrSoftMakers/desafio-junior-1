/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets/entities/pet.entity'
import { DataSource } from 'typeorm';


@Module({
  imports: [PetsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'pets',
    entities: [Pet],
    synchronize: true
  })],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
