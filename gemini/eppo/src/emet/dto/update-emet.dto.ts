import { PartialType } from '@nestjs/mapped-types';
import { CreateEmetDto } from './create-emet.dto';

export class UpdateEmetDto extends PartialType(CreateEmetDto) {}
