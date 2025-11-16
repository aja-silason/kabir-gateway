import { Injectable } from '@nestjs/common';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';
import { CustomNotFound } from 'src/domain/exception/CustomNotFound';
import { LogsService } from '../logs/logs.service';
import { LoggMetadata } from '../logs/dto/LoggMetadata';
import { Request } from 'express';

@Injectable()
export class AvailableDriversService {
    
    constructor(
      private readonly listAvailableDriversUsecase: ListAvailableDriversUsecase,
      private readonly createLogService: LogsService
  ){}

  async findAll(request: Request): Promise<any[]> {

    const aSearch = await this.listAvailableDriversUsecase.execute();
    
    this.createLogService.create(request);

    return aSearch;

  }

}
