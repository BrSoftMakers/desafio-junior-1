import { IsInt, IsNumber, IsOptional } from 'class-validator'
import { Transform } from 'class-transformer'

export class PaginationQueryDto {
  @Transform(({ value }) => (value <= 0 ? 1 : Number(value)))
  @IsOptional()
  @IsNumber()
  @IsInt()
  page: number

  @Transform(({ value }) => (value <= 0 || value > 100 ? 10 : Number(value)))
  @IsOptional()
  @IsNumber()
  @IsInt()
  limit: number
}
