import { Module } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { AvailableDriversController } from './available-drivers.controller';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';

@Module({
  controllers: [AvailableDriversController],
  providers: [
    AvailableDriversService,
    ListAvailableDriversUsecase,
  ],
})
export class AvailableDriversModule {}
