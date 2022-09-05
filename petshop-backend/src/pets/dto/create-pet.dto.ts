import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: Date;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  breed: string;

  @IsNumber()
  clientId: number;
}
