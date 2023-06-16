import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { CustomersModule } from './customers/customers.module'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
