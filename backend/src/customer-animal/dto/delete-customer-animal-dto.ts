import { IntersectionType } from '@nestjs/mapped-types'
import { CreateCustomerAnimalDto } from './create-customer-animal.dto'

export class DeleteCustomerAnimalDto extends IntersectionType(
  CreateCustomerAnimalDto
) {}
