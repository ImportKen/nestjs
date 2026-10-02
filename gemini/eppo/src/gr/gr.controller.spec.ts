import { Test, TestingModule } from '@nestjs/testing';
import { GrController } from './gr.controller';
import { GrService } from './gr.service';

describe('GrController', () => {
  let controller: GrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrController],
      providers: [GrService],
    }).compile();

    controller = module.get<GrController>(GrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
