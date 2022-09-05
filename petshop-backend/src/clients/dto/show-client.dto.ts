import { IsNotEmpty } from 'class-validator';

export class ShowClientDto {
  @IsNotEmpty()
  id: number;
}
