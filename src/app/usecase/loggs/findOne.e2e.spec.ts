import { Test, TestingModule } from '@nestjs/testing';
import { FindOneLoggsUsecase } from './findOne';
import { LoggsProtocol } from 'src/domain/logs/protocol/logs.protocol';
import { CustomNotFound } from 'src/domain/exception/CustomNotFound';

describe('FindOneLoggsUsecase', () => {
  let usecase: FindOneLoggsUsecase;
  let protocol: LoggsProtocol;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneLoggsUsecase,
        { provide: LoggsProtocol, useValue: { findOne: jest.fn() } },
      ],
    }).compile();

    usecase = module.get<FindOneLoggsUsecase>(FindOneLoggsUsecase);
    protocol = module.get<LoggsProtocol>(LoggsProtocol);
  });

  it('should return log when found', async () => {
    const mockLog = [{ id: '1', route: '/test' }];
    jest.spyOn(protocol, 'findOne').mockResolvedValue(mockLog);

    const result = await usecase.execute('1');
    expect(result).toEqual(mockLog);
    expect(protocol.findOne).toHaveBeenCalledWith('1');
  });

  it('should throw CustomNotFound when log not found', async () => {
    jest.spyOn(protocol, 'findOne').mockResolvedValue(undefined);

    await expect(usecase.execute('1')).rejects.toThrow(CustomNotFound);
  });
});
