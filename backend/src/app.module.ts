import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { CustomersModule } from './customers/customers.module'
import { AnimalsModule } from './animals/animals.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CustomersModule,
    AnimalsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
