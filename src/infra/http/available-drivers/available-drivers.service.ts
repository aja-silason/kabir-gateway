import { HttpException, Injectable } from '@nestjs/common';
import { listAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';

@Injectable()
export class AvailableDriversService {
  // create(createAvailableDriverDto: CreateAvailableDriverDto) {
  //   return 'This action adds a new availableDriver';
  // }

  constructor(
    private readonly listAvailableDriversUsecase: listAvailableDriversUsecase,
  ){}

  async findAll() {

    try {
      return await this.listAvailableDriversUsecase.execute();
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }


  }

  // findOne(id: number) {
  //   return `This action returns a #${id} availableDriver`;
  // }

  // update(id: number, updateAvailableDriverDto: UpdateAvailableDriverDto) {
  //   return `This action updates a #${id} availableDriver`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} availableDriver`;
  // }
}
