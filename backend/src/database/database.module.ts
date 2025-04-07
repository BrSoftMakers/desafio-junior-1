import 'dotenv/config'
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PetModule } from '../pet/pet.module';
import { Pet } from '../pet/entities/pet.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres', 
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [Pet],  
      autoLoadModels: true,
      synchronize: true,
    }),
    PetModule, 
  ],
})
export class DatabaseModule {}
