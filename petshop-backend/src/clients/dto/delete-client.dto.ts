import { IsNotEmpty } from 'class-validator';

export class DeleteClientDto {
  @IsNotEmpty()
  id: number;
}
