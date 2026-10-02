import { Module } from '@nestjs/common';
import { EmetService } from './emet.service';
import { EmetController } from './emet.controller';
import { emetProviders } from './emet.providers';
import { DatabaseModule } from 'src/config/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [EmetController],
  providers: [EmetService, ...emetProviders],
})
export class EmetModule {}