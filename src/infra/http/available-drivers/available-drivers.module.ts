import { Module } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { AvailableDriversController } from './available-drivers.controller';
import { ListAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';
import { LogsModule } from '../logs/logs.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [AvailableDriversController],
  imports: [
    LogsModule,
    CacheModule.register({
      ttl: 30, 
      max: 100,
    }),
  ],
  providers: [
    AvailableDriversService,
    ListAvailableDriversUsecase,
  ],
})
export class AvailableDriversModule {}
