import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateCustomerAnimalDto {
  @IsNotEmpty()
  @IsNumber()
  customerId: number

  @IsNotEmpty()
  @IsNumber()
  animalId: number
}
