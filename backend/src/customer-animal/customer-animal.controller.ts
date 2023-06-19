import { Controller, Post, Body, Delete, Query } from '@nestjs/common'
import { CustomerAnimalService } from './customer-animal.service'
import { CreateCustomerAnimalDto } from './dto/create-customer-animal.dto'
import { DeleteCustomerAnimalDto } from './dto/delete-customer-animal-dto'

@Controller('customer-animal')
export class CustomerAnimalController {
  constructor(private readonly customerAnimalService: CustomerAnimalService) {}

  @Post()
  create(@Body() createCustomerAnimalDto: CreateCustomerAnimalDto) {
    return this.customerAnimalService.create(createCustomerAnimalDto)
  }

  @Delete()
  remove(@Query() deleteCustomerAnimalDto: DeleteCustomerAnimalDto) {
    return this.customerAnimalService.remove(deleteCustomerAnimalDto)
  }
}
