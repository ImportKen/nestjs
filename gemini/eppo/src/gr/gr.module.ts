import { Module } from '@nestjs/common';
import { GrService } from './gr.service';
import { GrController } from './gr.controller';
import { DatabaseModule } from 'src/config/database.module';
import { grProviders } from './gr.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GrController],
  providers: [GrService, ...grProviders],
})
export class GrModule {}
