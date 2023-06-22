import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { CustomersModule } from './customers/customers.module'
import { AnimalsModule } from './animals/animals.module'
import { CustomerAnimalModule } from './customer-animal/customer-animal.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CustomersModule,
    AnimalsModule,
    CustomerAnimalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
