import { Module } from '@nestjs/common';
import { ClientService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientRepository } from './clients.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRepository])],
  providers: [ClientService],
  controllers: [ClientsController],
})
export class ClientsModule {}
