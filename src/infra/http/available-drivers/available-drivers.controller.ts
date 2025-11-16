import { Controller, Get, Req } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { AvailabeDriverResponseDto } from './dto/response-available-driver.dto';
import { LoggMetadata } from '../logs/dto/LoggMetadata';
import { Request } from 'express';


@Controller('available-drivers')
export class AvailableDriversController {

  constructor(
    private readonly availableDriversService: AvailableDriversService
  ) {}


  @Get()
  async getAvailable(@Req() req): Promise<AvailabeDriverResponseDto[]> {

    const drivers = await this.availableDriversService.findAll(req);
    return drivers.map(d => ({
      driverName: d.allProps.driverName,
      vehicleType: d.allProps.vehicleType,
      location: d.allProps.location,
      priceEstimate: d.allProps.priceEstimate,
      etaMinutes: d.allProps.etaMinutes
    }))

  }

}
