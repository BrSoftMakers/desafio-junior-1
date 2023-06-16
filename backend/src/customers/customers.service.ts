import { InjectModel } from '@nestjs/sequelize'
import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { Customer } from './entities/customer.entity'
import { PaginationQueryDto } from './dto/pagination-query.dto'

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerModel.create(createCustomerDto)
    await customer.save()
  }

  async findAll({ limit = 10, page = 1 }: PaginationQueryDto) {
    const customers = await this.customerModel.findAll({
      limit,
      offset: (page - 1) * limit,
    })
    return customers
  }

  async findOne(id: number) {
    const customer = await this.customerModel.findByPk(id)
    if (!customer) throw new NotFoundException()
    return customer
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.findOne(id)
    Object.assign(customer, { ...updateCustomerDto })
    await customer.save()
  }

  async remove(id: number) {
    const user = await this.findOne(id)
    await user.destroy()
  }
}
