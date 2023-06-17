import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCustomerAddressDto } from './dto/create-customer-address.dto'
import { UpdateCustomerAddressDto } from './dto/update-customer-address.dto'
import { InjectModel } from '@nestjs/sequelize'
import { CustomerAddress } from './entities/customer-address.entity'

@Injectable()
export class CustomerAddressesService {
  constructor(
    @InjectModel(CustomerAddress)
    private customerAddressModel: typeof CustomerAddress
  ) {}

  async create(
    customerId: number,
    createCustomerAddressDto: CreateCustomerAddressDto
  ) {
    const customerAddress = await this.customerAddressModel.create({
      customerId,
      ...createCustomerAddressDto,
    })
    await customerAddress.save()
  }

  private async findOne(customerId: number) {
    const customerAddress = await this.customerAddressModel.findOne({
      where: { customerId },
    })
    if (!customerAddress) throw new NotFoundException()
    return customerAddress
  }

  async update(
    customerId: number,
    updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    const customerAddress = await this.findOne(customerId)
    Object.assign(customerAddress, { ...updateCustomerAddressDto })
    await customerAddress.save()
  }
}
