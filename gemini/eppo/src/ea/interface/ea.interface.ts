import { Document } from 'mongoose';

export interface Ea extends Document {
  readonly Year: number;
  readonly Month: string;
  readonly peak: number;
  readonly generation: number;
  readonly loadFactory: number;
}