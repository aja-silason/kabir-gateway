import { Inject, Injectable } from '@nestjs/common';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';
import { CustomNotFound } from 'src/domain/exception/CustomNotFound';
import { LogsService } from '../logs/logs.service';
import { LoggMetadata } from '../logs/dto/LoggMetadata';
import { Request } from 'express';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class AvailableDriversService {
    
    constructor(
      @Inject(CACHE_MANAGER) private cacheManager: Cache,
      private readonly listAvailableDriversUsecase: ListAvailableDriversUsecase,
      private readonly createLogService: LogsService
  ){}

  async findAll(request: Request): Promise<any[]> {

    const drivers = await this.listAvailableDriversUsecase.execute();
    
    this.createLogService.create(request);

    await this.cacheManager.set('available_drivers', drivers, 30);

    return drivers;

  }

}
