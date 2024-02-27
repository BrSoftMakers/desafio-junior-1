// app.module.ts
import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetModule } from './pet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'softpetonline',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Pet],
    }),
    PetModule,
  ],
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

  constructor() {
    // Adiciona um log de confirmação de conexão
    this.logger.log('Conexão com o banco de dados estabelecida com sucesso.');
  }
}
