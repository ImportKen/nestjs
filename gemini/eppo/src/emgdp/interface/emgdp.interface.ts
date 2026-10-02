import { Document } from "mongoose";

export interface Emgdp extends Document {
  readonly Year: number;
  readonly CO2_Emission: number;
  readonly GDP_CVM: number;
  readonly CO2_per_GDP: number;
}