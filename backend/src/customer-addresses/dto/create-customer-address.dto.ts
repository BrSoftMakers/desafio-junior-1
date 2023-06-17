import { IsNotEmpty, IsString, Length, Matches } from 'class-validator'

export class CreateCustomerAddressDto {
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  @Matches(/^[0-9]{8}$/)
  zipCode: string

  @IsNotEmpty()
  @IsString()
  street: string

  @IsNotEmpty()
  @IsString()
  number: string

  @IsNotEmpty()
  @IsString()
  @Length(4, 25)
  state: string

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  city: string
}
