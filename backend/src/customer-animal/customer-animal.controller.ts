import { Controller, Post, Body } from '@nestjs/common'
import { CustomerAnimalService } from './customer-animal.service'
import { CreateCustomerAnimalDto } from './dto/create-customer-animal.dto'

@Controller('customer-animal')
export class CustomerAnimalController {
  constructor(private readonly customerAnimalService: CustomerAnimalService) {}

  @Post()
  create(@Body() createCustomerAnimalDto: CreateCustomerAnimalDto) {
    return this.customerAnimalService.create(createCustomerAnimalDto)
  }
}
