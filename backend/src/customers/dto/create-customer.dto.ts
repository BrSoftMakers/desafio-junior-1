import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  ValidateNested,
  IsNotEmptyObject,
  IsObject,
} from 'class-validator'
import { Type } from 'class-transformer'
import { CreateCustomerAddressDto } from 'src/customer-addresses/dto/create-customer-address.dto'

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @Length(8, 255)
  fullName: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @Length(11, 20)
  phone: string

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateCustomerAddressDto)
  customerAddress: CreateCustomerAddressDto
}
