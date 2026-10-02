import { Test, TestingModule } from '@nestjs/testing';
import { EmetService } from './emet.service';

describe('EmetService', () => {
  let service: EmetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmetService,
        {
          provide: 'EMET_MODEL',
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EmetService>(EmetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});