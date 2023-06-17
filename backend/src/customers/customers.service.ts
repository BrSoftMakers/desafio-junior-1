import { InjectModel } from '@nestjs/sequelize'
import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { Customer } from './entities/customer.entity'
import { PaginationQueryDto } from './dto/pagination-query.dto'
import { CustomerAddress } from 'src/customer-addresses/entities/customer-address.entity'
import { CustomerAddressesService } from 'src/customer-addresses/customer-addresses.service'

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
    private readonly customerAddressesService: CustomerAddressesService
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const {
      customerAddress: customerAddressProperties,
      ...customerProperties
    } = createCustomerDto

    const customer = await this.customerModel.create(customerProperties)
    const customerCreated = await customer.save()
    await this.customerAddressesService.create(
      customerCreated.id,
      customerAddressProperties
    )
  }

  async findAll({ limit = 10, page = 1 }: PaginationQueryDto) {
    const customers = await this.customerModel.findAll({
      limit,
      offset: (page - 1) * limit,
    })
    return customers
  }

  async findOne(id: number) {
    const customer = await this.customerModel.findOne({
      where: { id },
      include: [CustomerAddress],
    })
    if (!customer) throw new NotFoundException()
    return customer
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const {
      customerAddress: customerAddressProperties,
      ...customerProperties
    } = updateCustomerDto
    const customer = await this.findOne(id)
    Object.assign(customer, { ...customerProperties })
    await customer.save()
    await this.customerAddressesService.update(
      customer.id,
      customerAddressProperties
    )
  }

  async remove(id: number) {
    const customer = await this.findOne(id)
    await customer.destroy()
  }
}
