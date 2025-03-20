import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'petshop',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Apenas para desenvolvimento!
    }),
    PetsModule,
  ],
})
export class AppModule {}
