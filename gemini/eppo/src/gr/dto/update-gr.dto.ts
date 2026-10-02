import { PartialType } from '@nestjs/mapped-types';
import { CreateGrDto } from './create-gr.dto';

export class UpdateGrDto extends PartialType(CreateGrDto) {}
