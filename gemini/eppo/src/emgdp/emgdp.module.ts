import { Module } from '@nestjs/common';
import { EmgdpService } from './emgdp.service';
import { EmgdpController } from './emgdp.controller';
import { emgdpProviders } from './emgdp.providers';
import { DatabaseModule } from 'src/config/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmgdpController],
  providers: [EmgdpService,...emgdpProviders,],
})
export class EmgdpModule { }
