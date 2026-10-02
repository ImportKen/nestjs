import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { Gr } from './interface/gr.interface';
import { CreateGrDto } from './dto/create-gr.dto';
import { UpdateGrDto } from './dto/update-gr.dto';
import { Model } from 'mongoose';

@Injectable()
export class GrService {
  constructor(
    @Inject('GR_MODEL') private readonly grModel: Model<Gr>,
  ) { }

  async findAll(): Promise<Gr[]> {
    const grs = await this.grModel.find().exec();
    return grs;
  }

  async findByYearRange(startYear: number, endYear: number): Promise<Gr[]> {
    const years = await this.findAll();
    const range = years.length;

    if (!startYear || startYear === null) {
      startYear = years[0].Year;
    }

    if (!endYear || endYear === null) {
      endYear = years[range - 1].Year;
    }

    if (startYear > endYear) {
      throw new BadRequestException('start and end invalid');
    }

    const grs = await this.grModel.find({ Year: { $gte: startYear, $lte: endYear } }).exec();
    if (!grs || grs.length === 0) {
      throw new NotFoundException('year not found');
    }
    return grs;
  }
  
}
