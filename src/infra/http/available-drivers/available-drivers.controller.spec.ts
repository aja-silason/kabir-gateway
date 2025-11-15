import { Test, TestingModule } from '@nestjs/testing';
import { AvailableDriversController } from './available-drivers.controller';
import { AvailableDriversService } from './available-drivers.service';

describe('AvailableDriversController', () => {
  let controller: AvailableDriversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailableDriversController],
      providers: [AvailableDriversService],
    }).compile();

    controller = module.get<AvailableDriversController>(AvailableDriversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
