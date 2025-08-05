import { PartialType } from '@nestjs/mapped-types';
import { CreateDonoDto } from './create-dono.dto';

export class UpdateDonoDto extends PartialType(CreateDonoDto) {}
