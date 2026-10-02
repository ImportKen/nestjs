import { PartialType } from '@nestjs/mapped-types';
import { CreateEmgdpDto } from './create-emgdp.dto';

export class UpdateEmgdpDto extends PartialType(CreateEmgdpDto) {}
