import { Document } from 'mongoose';

export interface Emet extends Document {
  readonly Year: number;
  readonly Oil: number;
  readonly 'Coal/Lignite': number;
  readonly 'Natural Gas': number;
  readonly Total: number;
}