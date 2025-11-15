import { Injectable } from '@nestjs/common';
import { CreateAvailableDriverDto } from './dto/create-available-driver.dto';
import { UpdateAvailableDriverDto } from './dto/update-available-driver.dto';

@Injectable()
export class AvailableDriversService {
  // create(createAvailableDriverDto: CreateAvailableDriverDto) {
  //   return 'This action adds a new availableDriver';
  // }

  findAll() {
    return `This action returns all availableDrivers`;
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
