import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { Animal } from 'src/animals/entities/animal.entity'
import { CustomerAddress } from 'src/customer-addresses/entities/customer-address.entity'
import { CustomerAnimal } from 'src/customer-animal/entities/customer-animal.entity'
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
      models: [Customer, CustomerAddress, Animal, CustomerAnimal],
      autoLoadModels: false,
      synchronize: false,
      dialectOptions: {
        ssl: process.env.DATABASE_ENABLE_SSL === 'true' ? true : false,
      },
      ssl: process.env.DATABASE_ENABLE_SSL === 'true' ? true : false,
    }),
  ],
})
export class DatabaseModule {}
