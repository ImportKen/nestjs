import { BadRequestException, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Emet } from './interface/emet.interface';
import { Model } from 'mongoose';

@Injectable()
export class EmetService {
  constructor(
    @Inject('EMET_MODEL')
    private emetModel: Model<Emet>,
  ) { }

  async findAll(): Promise<Emet[]> {
    return this.emetModel.find().select('-_id -__v').exec();
  }

  async findByYearRange(startYear: number, endYear: number): Promise<Emet[]> {
    // const start = Number(startYear);
    // const end = Number(endYear);

    // มันรับค่าเป็น number อยู่แล้ว ไม่ต้องแปลงเป็น Number อีกครั้ง

    if (startYear > endYear) {
      throw new BadRequestException('start and end invalid');
    }

    const data = await this.emetModel.find({
      Year: { $gte: startYear, $lte: endYear },
    }).select('-_id -__v').exec();

    if (!data || data.length === 0) {
      throw new NotFoundException('year not found');
    }

    return data;
  }
}