import { Injectable } from '@nestjs/common'
import { CreateCustomerAddressDto } from './dto/create-customer-address.dto'
import { UpdateCustomerAddressDto } from './dto/update-customer-address.dto'

@Injectable()
export class CustomerAddressesService {
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return 'This action adds a new customerAddress'
  }

  findAll() {
    return `This action returns all customerAddresses`
  }

  findOne(id: number) {
    return `This action returns a #${id} customerAddress`
  }

  update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return `This action updates a #${id} customerAddress`
  }

  remove(id: number) {
    return `This action removes a #${id} customerAddress`
  }
}
