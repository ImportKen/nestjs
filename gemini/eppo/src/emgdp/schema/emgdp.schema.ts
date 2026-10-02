import mongoose, { Schema } from "mongoose";

export const EmgdpSchema = new mongoose.Schema({
  Year: Number,
  CO2_Emission: Number,
  GDP_CVM: Number,
  CO2_per_GDP: Number, 
})