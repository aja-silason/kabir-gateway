import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { AvailabeDriverResponseDto } from './dto/response-available-driver.dto';

@Controller('available-drivers')
export class AvailableDriversController {

  constructor(
    private readonly availableDriversService: AvailableDriversService
  ) {}


  @Get()
  async getAvailable(@Req() req): Promise<AvailabeDriverResponseDto[]> {

    const route = req.originalUrl;
    const method = req.method;

    const request : {route: string, method: string} = {
      route: route,
      method: method
    }

    const drivers = await this.availableDriversService.findAll(request);
    return drivers.map(d => ({
      driverName: d.allProps.driverName,
      vehicleType: d.allProps.vehicleType,
      location: d.allProps.location,
      priceEstimate: d.allProps.priceEstimate,
      etaMinutes: d.allProps.etaMinutes
    }))

  }

}
