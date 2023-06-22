import { Module } from '@nestjs/common'
import { CustomerAddressesService } from './customer-addresses.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Customer } from 'src/customers/entities/customer.entity'
import { CustomerAddress } from './entities/customer-address.entity'

@Module({
  imports: [SequelizeModule.forFeature([Customer, CustomerAddress])],
  providers: [CustomerAddressesService],
  exports: [CustomerAddressesService],
})
export class CustomerAddressesModule {}
