import { IsNotEmpty, IsNumber } from 'class-validator';

export class ListPetDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;
}
