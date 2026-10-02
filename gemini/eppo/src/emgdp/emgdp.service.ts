import { BadRequestException, Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Emgdp } from './interface/emgdp.interface';
import { Model } from 'mongoose';

@Injectable()
export class EmgdpService {
  constructor(
    @Inject('EMGDP_MODEL')
    private emgdpModel: Model<Emgdp>
  ) { }

  async findAll(): Promise<Emgdp[]> {
    return this.emgdpModel.find().select('-_id -__v').exec();
  }

  async findByYearRange(startYear: number, endYear: number): Promise<Emgdp[]> {
    // const start = Number(startYear);
    // const end = Number(endYear);

    // มันรับค่าเป็น number อยู่แล้ว ไม่ต้องแปลงเป็น Number อีกครั้ง

    if (startYear > endYear) {
      throw new BadRequestException('start and end invalid');
    }

    const data = await this.emgdpModel.find({
      Year: { $gte: startYear, $lte: endYear },
    }).select('-_id -__v').exec();

    if (!data || data.length === 0) {
      throw new NotFoundException('year not found');
    }

    return data;
  }
}
