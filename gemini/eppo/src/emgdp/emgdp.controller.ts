import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { EmgdpService } from './emgdp.service';

import { CreateEmgdpDto } from './dto/create-emgdp.dto';
import { UpdateEmgdpDto } from './dto/update-emgdp.dto';

@Controller('eppo/emgdp')
export class EmgdpController {
  constructor(private readonly emgdpService: EmgdpService) { }

  @Get()
  async findByYearRange(@Query('startYear') startYear: number, @Query('endYear') endYear: number) {

    const parsedStart = Number(startYear);
    const parsedEnd = Number(endYear);

    if (
      startYear === undefined ||
      endYear === undefined ||
      String(startYear).trim() === '' ||
      String(endYear).trim() === '' ||
      !Number.isInteger(parsedStart) ||
      !Number.isInteger(parsedEnd)
    ) {
      throw new BadRequestException('start and end invalid');
    }

    return this.emgdpService.findByYearRange(parsedStart, parsedEnd);
  }
}
