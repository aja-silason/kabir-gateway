import { HttpException, Injectable } from '@nestjs/common';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';
import { CustomNotFound } from 'src/domain/exception/CustomNotFound';
import { LogsService } from '../logs/logs.service';

@Injectable()
export class AvailableDriversService {
    
    constructor(
      private readonly listAvailableDriversUsecase: ListAvailableDriversUsecase,
      private readonly createLogService: LogsService
  ){}

  async findAll(): Promise<any[]> {

    const aSearch = await this.listAvailableDriversUsecase.execute();
    
    const res = this.createLogService.create(aSearch);

    console.log("No Usecase", res);

    return aSearch;

  }

}
