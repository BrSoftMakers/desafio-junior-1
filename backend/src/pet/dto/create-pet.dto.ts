import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do pet',
    example: 'Rex',
  })
  name: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    description: 'Data de nascimento do pet',
    example: '2020-04-04',
  })
  age: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Tipo de animal (por exemplo, cachorro, gato)',
    example: 'Cachorro',
  })
  type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Raça do pet',
    example: 'Labrador',
  })
  breed: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Informações de contato do dono do pet',
    example: '1234-5678',
  })
  contact: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Endereço do dono do pet',
    example: 'Rua das Flores, 123',
  })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do cliente, dono do pet',
    example: 'Marcos Henrique',
  })
  customerName: string;
}