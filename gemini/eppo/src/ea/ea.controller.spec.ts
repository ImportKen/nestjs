import { Test, TestingModule } from '@nestjs/testing';
import { EaController } from './ea.controller.js';
import { EaService } from './ea.service.js';

describe('EaController', () => {
  let controller: EaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EaController],
      providers: [EaService],
    }).compile();

    controller = module.get<EaController>(EaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
