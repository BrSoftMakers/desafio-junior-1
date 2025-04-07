import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'pets' })
export class Pet extends Model<Pet> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Nome do pet',
    example: 'Rex',
  })
  name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Data de nascimento do pet',
    example: '2020-04-04',
  })
  age: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Tipo de animal (cachorro ou gato)',
    example: 'Cachorro',
  })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Raça do pet',
    example: 'Labrador',
  })
  breed: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Informações de contato do dono do pet',
    example: '(00) 00000-0000',
  })
  contact: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Endereço do dono do pet',
    example: 'Rua das Flores, 123',
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty({
    description: 'Nome do cliente, dono do pet',
    example: 'Marcos Henrique',
  })
  customerName: string;
}
