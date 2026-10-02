import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { EmetService } from './emet.service';
import { CreateEmetDto } from './dto/create-emet.dto';
import { UpdateEmetDto } from './dto/update-emet.dto';

@Controller('eppo/emet')
export class EmetController {
  constructor(private readonly emetService: EmetService) { }

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
  
      return this.emetService.findByYearRange(parsedStart, parsedEnd);
    }
}
