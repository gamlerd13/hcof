import { Test, TestingModule } from '@nestjs/testing';
import { VsService } from './vs.service';

describe('VsService', () => {
  let service: VsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VsService],
    }).compile();

    service = module.get<VsService>(VsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
