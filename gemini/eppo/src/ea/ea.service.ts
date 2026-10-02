import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEaDto } from './dto/create-ea.dto.js';
import { UpdateEaDto } from './dto/update-ea.dto.js';
import { Model } from 'mongoose';
import type { Ea } from './interface/ea.interface.js';

@Injectable()
export class EaService {
  constructor(
    @Inject('EA_MODEL') private readonly eaModel: Model<Ea>) {}

  async findAll(): Promise<Ea[]> {
    const data = await this.eaModel.find().exec();
    if (!data || data.length === 0) {
      throw new NotFoundException('Data not found');
    }
    return data;
  }

  async findAllByYear(year: number): Promise<Ea[]> {
    const year_find = await this.eaModel.find({ Year: year }).exec();
    if (!year_find || year_find.length === 0) {
      throw new NotFoundException('year not found');
    }
    return year_find;
  }

  async findAllByYearAndMonth(year: number, month: string): Promise<Ea[]> {
    const data = await this.eaModel.find({ Year: year, Month: month.toUpperCase() }).exec();
    if (!data || data.length === 0) {
      throw new NotFoundException('year or month not found');
    }
    return data;
  }

  async findAllByMonth(month: string): Promise<Ea[]> {
    const data = await this.eaModel.find({ Month: month.toUpperCase() }).exec();
    if (!data || data.length === 0) {
      throw new NotFoundException('mounth not found');
    }
    return data;
  }
}
