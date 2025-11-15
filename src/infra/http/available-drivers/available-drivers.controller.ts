import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { AvailabeDriverResponseDto } from './dto/response-available-driver.dto';

@Controller('available-drivers')
export class AvailableDriversController {

  constructor(
    private readonly availableDriversService: AvailableDriversService
  ) {}

  // @Post()
  // create(@Body() createAvailableDriverDto: CreateAvailableDriverDto) {
  //   return this.availableDriversService.create(createAvailableDriverDto);
  // }

  @Get()
  async getAvailable(@Req() req): Promise<AvailabeDriverResponseDto[]> {

    const drivers = await this.availableDriversService.findAll();
    return drivers.map(d => ({
      driverName: d.allProps.driverName,
      vehicleType: d.allProps.vehicleType,
      location: d.allProps.location,
      priceEstimate: d.allProps.priceEstimate,
      etaMinutes: d.allProps.etaMinutes
    }))

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
