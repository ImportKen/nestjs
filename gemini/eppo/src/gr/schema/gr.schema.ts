
import mongoose, { Schema } from 'mongoose';

export const GrSchema = new mongoose.Schema({
  Year: Number,
  ElectricityConsumption: Number,
  ElectricityConsumption_capita: Number,
  Population: Number,
});
