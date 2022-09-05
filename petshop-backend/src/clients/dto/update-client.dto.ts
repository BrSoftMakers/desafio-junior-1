import { MinLength, MaxLength, IsString, IsEmail } from 'class-validator';

export class UpdateClientDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @IsString()
  address: string;
}
