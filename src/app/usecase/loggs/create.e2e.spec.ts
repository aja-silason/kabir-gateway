import { Test, TestingModule } from '@nestjs/testing';
import { GenerateLoggUsecase } from './create';
import { LoggsProtocol } from 'src/domain/logs/protocol/logs.protocol';
import { Request } from 'express';

describe('GenerateLoggUsecase', () => {
  let usecase: GenerateLoggUsecase;
  let protocol: LoggsProtocol;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GenerateLoggUsecase,
        { provide: LoggsProtocol, useValue: { create: jest.fn() } },
      ],
    }).compile();

    usecase = module.get<GenerateLoggUsecase>(GenerateLoggUsecase);
    protocol = module.get<LoggsProtocol>(LoggsProtocol);
  });

  it('should be defined', () => {
    expect(usecase).toBeDefined();
  });

  it('should call protocol.create with correct LoggsDto', async () => {
    const mockRequest = {
      originalUrl: '/test',
      method: 'GET',
      query: {},
      headers: { 'user-agent': 'jest-test' },
    } as unknown as Request;

    await usecase.execute(mockRequest);

    expect(protocol.create).toHaveBeenCalled();
    const calledArg = (protocol.create as jest.Mock).mock.calls[0][0];
    expect(calledArg).toHaveProperty('id');
    expect(calledArg).toHaveProperty('route', '/test');
    expect(calledArg).toHaveProperty('deviceIp');
    expect(calledArg).toHaveProperty('method', 'GET');
    expect(calledArg).toHaveProperty('userAgent', 'jest-test');
    expect(calledArg).toHaveProperty('responseTimeMs');
  });
});
