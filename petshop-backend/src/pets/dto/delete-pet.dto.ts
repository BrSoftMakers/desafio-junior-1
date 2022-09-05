import { IsNotEmpty } from 'class-validator';

export class DeletePetDto {
  @IsNotEmpty()
  id: number;
}
