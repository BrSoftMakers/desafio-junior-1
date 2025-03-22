import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePetDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Rex', description: 'Nome do pet', required: false })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Cachorro',
    description: 'Tipo do pet',
    required: false,
  })
  animal: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Pincher',
    description: 'Raça do pet',
    required: false,
  })
  race: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Maria',
    description: 'Nome do dono',
    required: false,
  })
  owner: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: '01123456789',
    description: 'Telefone do dono',
    required: false,
  })
  phone: number;

  @IsDate()
  @IsOptional()
  @ApiProperty({
    example: '21/03/2025',
    description: 'Data de nascimento do pet',
    required: false,
  })
  birthdate: Date;
}
