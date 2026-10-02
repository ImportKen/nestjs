import { Test, TestingModule } from '@nestjs/testing';
import { EaService } from './ea.service.js';

describe('EaService', () => {
  let service: EaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EaService],
    }).compile();

    service = module.get<EaService>(EaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
