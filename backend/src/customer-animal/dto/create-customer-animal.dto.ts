import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateCustomerAnimalDto {
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  customerId: number

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  animalId: number
}
