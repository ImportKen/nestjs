import mongoose, { Schema } from "mongoose";

export const EmetSchema = new mongoose.Schema({
  Year: Number,
  Oil: Number ,
  'Coal/Lignite': Number ,
  'Natural Gas': Number ,
  Total: Number ,
});