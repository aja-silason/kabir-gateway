import { HttpException, Injectable } from '@nestjs/common';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';
import { DriverNotFoundException } from 'src/domain/exception/DriverNotFound';

@Injectable()
export class AvailableDriversService {
  // create(createAvailableDriverDto: CreateAvailableDriverDto) {
  //   return 'This action adds a new availableDriver';
  // }

  constructor(
    private readonly listAvailableDriversUsecase: ListAvailableDriversUsecase,
  ){}

  async findAll() {

      const drivers = await this.listAvailableDriversUsecase.execute();
      
      if(!drivers.length) {
        throw new DriverNotFoundException("No drivers available");
      }

      return drivers;


  }

}
