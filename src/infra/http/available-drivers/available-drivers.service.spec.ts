import { Test, TestingModule } from '@nestjs/testing';
import { AvailableDriversService } from './available-drivers.service';

describe('AvailableDriversService', () => {
  let service: AvailableDriversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailableDriversService],
    }).compile();

    service = module.get<AvailableDriversService>(AvailableDriversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
