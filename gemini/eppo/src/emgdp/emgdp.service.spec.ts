import { Test, TestingModule } from '@nestjs/testing';
import { EmgdpService } from './emgdp.service';

describe('EmgdpService', () => {
  let service: EmgdpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmgdpService,
        {
          provide: 'EMGDP_MODEL',
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EmgdpService>(EmgdpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});