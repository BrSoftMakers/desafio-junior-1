import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

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
}
