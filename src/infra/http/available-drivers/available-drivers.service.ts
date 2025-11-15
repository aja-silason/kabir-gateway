import { HttpException, Injectable } from '@nestjs/common';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';

@Injectable()
export class AvailableDriversService {
  // create(createAvailableDriverDto: CreateAvailableDriverDto) {
  //   return 'This action adds a new availableDriver';
  // }

  constructor(
    private readonly listAvailableDriversUsecase: ListAvailableDriversUsecase,
  ){}

  async findAll() {

    try {
      return await this.listAvailableDriversUsecase.execute();
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }


  }

}
