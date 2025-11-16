import { Test, TestingModule } from '@nestjs/testing';
import { ListLoggsUsecase } from './list';
import { LoggsProtocol } from 'src/domain/logs/protocol/logs.protocol';
import { CustomNotFound } from 'src/domain/exception/CustomNotFound';

describe('ListLoggsUsecase', () => {
  let usecase: ListLoggsUsecase;
  let protocol: LoggsProtocol;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListLoggsUsecase,
        { provide: LoggsProtocol, useValue: { findAll: jest.fn() } },
      ],
    }).compile();

    usecase = module.get<ListLoggsUsecase>(ListLoggsUsecase);
    protocol = module.get<LoggsProtocol>(LoggsProtocol);
  });

  it('should return all logs', async () => {
    const mockLogs = [{
        id: "e01d00a7-2ec6-44eb-9eb0-ccc74fd24e20",
        route: "/drivers",
        deviceIp: "12.212.212.21",
        method: "GET",
        userAgent: "PostmanRuntime/7.32.0",
        queryParams: { "available": true },
        statusCode: 200,
        responseTimeMs: 45,
        accessedAt: new Date()
    }];
    jest.spyOn(protocol, 'findAll').mockResolvedValue(mockLogs);

    const result = await usecase.execute();
    expect(result).toEqual(mockLogs);
    expect(protocol.findAll).toHaveBeenCalled();
  });

  it('should throw CustomNotFound when no logs found', async () => {
    jest.spyOn(protocol, 'findAll').mockResolvedValue([]);

    await expect(usecase.execute()).rejects.toThrow(CustomNotFound);
  });
});
