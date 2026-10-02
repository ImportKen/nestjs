import { Test, TestingModule } from '@nestjs/testing';
import { EmetController } from './emet.controller';
import { EmetService } from './emet.service';

describe('EmetController', () => {
  let controller: EmetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmetController],
      providers: [
        {
          provide: EmetService,
          useValue: {
            findByYearRange: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EmetController>(EmetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});