import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrModule } from './gr/gr.module';
import { EmgdpModule } from './emgdp/emgdp.module';
import { EmetModule } from './emet/emet.module';
import { EaModule } from './ea/ea.module';

@Module({
  imports: [GrModule, EmgdpModule, EmetModule, EaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
