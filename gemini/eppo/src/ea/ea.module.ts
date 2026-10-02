import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EaService } from './ea.service';
import { EaController } from './ea.controller';
import { DatabaseModule } from 'src/config/database.module';
import {eaProviders} from './ea.providers.js';

@Module({
  imports: [DatabaseModule],
  controllers: [EaController],
  providers: [EaService, ...eaProviders],
})
export class EaModule {}