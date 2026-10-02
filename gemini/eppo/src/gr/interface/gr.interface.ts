
import { Document } from 'mongoose';

export interface Gr extends Document {
  readonly Year: number;
  readonly ElectricityConsumption: number;
  readonly ElectricityConsumption_capita: number;
  readonly Population: number;
}
