import { IsEnum, IsNotEmpty, IsNumber, IsString, IsInt } from 'class-validator'
import { AnimalTypes } from '../types/enums/enums'

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  age: number

  @IsNotEmpty()
  @IsEnum(AnimalTypes)
  type: AnimalTypes

  @IsNotEmpty()
  @IsString()
  race: string
}
