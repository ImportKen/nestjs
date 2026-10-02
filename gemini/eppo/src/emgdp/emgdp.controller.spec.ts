import { Test, TestingModule } from '@nestjs/testing';
import { EmgdpController } from './emgdp.controller';
import { EmgdpService } from './emgdp.service';

describe('EmgdpController', () => {
  let controller: EmgdpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmgdpController],
      providers: [
        {
          provide: EmgdpService,
          useValue: {
            findByYearRange: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EmgdpController>(EmgdpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});