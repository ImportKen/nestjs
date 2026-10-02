import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { GrService } from './gr.service';
import { CreateGrDto } from './dto/create-gr.dto';
import { UpdateGrDto } from './dto/update-gr.dto';

@Controller('eppo/gr')
export class GrController {
  constructor(private readonly grService: GrService) { }

  @Get()
  async findByYearRange(@Query('startYear') startYear: number, @Query('endYear') endYear: number) {

    const parsedStart = Number(startYear);
    const parsedEnd = Number(endYear);

    if (startYear === undefined && endYear === undefined) {
      return this.grService.findAll();
    }

    if (Number.isNaN(parsedStart) || Number.isNaN(parsedEnd)) {
      throw new BadRequestException('start and end must be number || not have a startYear or endYear');
    }

    return this.grService.findByYearRange(startYear, endYear);
  }

}
