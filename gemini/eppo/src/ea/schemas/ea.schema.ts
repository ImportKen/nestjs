// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// export type EaDocument = Ea & Document;
// @Schema()
// export class Ea {

//   @Prop()
//   Year: number;
//   @Prop()
//   Month: string;
//   @Prop()
//   peak: number;
//   @Prop()
//   generation: number;
//   @Prop()
//   loadFactory: number;

// }

// export const EaSchema = SchemaFactory.createForClass(Ea);

import mongoose, { Schema } from 'mongoose';

export const EaSchema = new mongoose.Schema({
  Year: Number,
  Month: String,
  peak: Number,
  generation: Number,
  loadFactory: Number,
});