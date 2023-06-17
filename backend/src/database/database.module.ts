import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { Animal } from 'src/animals/entities/animal.entity'
import { CustomerAddress } from 'src/customer-addresses/entities/customer-address.entity'
import { Customer } from 'src/customers/entities/customer.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      models: [Customer, CustomerAddress, Animal],
      autoLoadModels: false,
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
