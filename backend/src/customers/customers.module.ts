import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { CustomersService } from './customers.service'
import { CustomersController } from './customers.controller'
import { Customer } from './entities/customer.entity'
import { CustomerAddress } from 'src/customer-addresses/entities/customer-address.entity'
import { CustomerAddressesModule } from 'src/customer-addresses/customer-addresses.module'

@Module({
  imports: [
    SequelizeModule.forFeature([Customer, CustomerAddress]),
    CustomerAddressesModule,
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
