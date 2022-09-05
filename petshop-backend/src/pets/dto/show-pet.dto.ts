import { IsNotEmpty } from 'class-validator';

export class ShowPetDto {
  @IsNotEmpty()
  id: number;
}
