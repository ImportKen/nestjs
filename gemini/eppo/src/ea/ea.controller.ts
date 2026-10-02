import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { EaService } from './ea.service.js';

@Controller('eppo/ea')
export class EaController {
  constructor(private readonly eaService: EaService) {}

  @Get()
  async findByYearOrMonth(@Query('year') year: number, @Query('month') month: string) {
    if (year !== undefined && month !== undefined) {
      return this.eaService.findAllByYearAndMonth(this.parseYear(year), month);
    }
    if (year !== undefined) {
      return this.eaService.findAllByYear(this.parseYear(year));
    }
    if (month !== undefined) {
      return this.eaService.findAllByMonth(this.parseMonth(month));
    }
    return this.eaService.findAll();
  }

  private parseYear(year: number): number {
    const parsedYear = Number(year);
    if (Number.isNaN(parsedYear)) {
      throw new BadRequestException('year must be a number');
    }
    return parsedYear;
  }

  private parseMonth(month: string): string {
    const checkMonth = Number(month); // Check if the month is a number
    if (!Number.isNaN(checkMonth)) {
      throw new BadRequestException('month must be a string');
    }
    return month.toUpperCase();
  }
}