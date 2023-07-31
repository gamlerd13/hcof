import { Test, TestingModule } from '@nestjs/testing';
import { VsController } from './vs.controller';

describe('VsController', () => {
  let controller: VsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VsController],
    }).compile();

    controller = module.get<VsController>(VsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
