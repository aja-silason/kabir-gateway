import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { CreateAvailableDriverDto } from './dto/create-available-driver.dto';
import { UpdateAvailableDriverDto } from './dto/update-available-driver.dto';

@Controller('available-drivers')
export class AvailableDriversController {
  constructor(private readonly availableDriversService: AvailableDriversService) {}

  // @Post()
  // create(@Body() createAvailableDriverDto: CreateAvailableDriverDto) {
  //   return this.availableDriversService.create(createAvailableDriverDto);
  // }

  @Get()
  findAll() {
    return this.availableDriversService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.availableDriversService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAvailableDriverDto: UpdateAvailableDriverDto) {
  //   return this.availableDriversService.update(+id, updateAvailableDriverDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.availableDriversService.remove(+id);
  // }
}
