import { IsDateString, IsString } from 'class-validator';

export class UpdatePetDto {
  @IsString()
  nickname: string;

  @IsDateString()
  birthday: Date;

  @IsString()
  type: string;

  @IsString()
  breed: string;
}
