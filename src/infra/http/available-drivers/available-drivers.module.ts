import { Module } from '@nestjs/common';
import { AvailableDriversService } from './available-drivers.service';
import { AvailableDriversController } from './available-drivers.controller';
import { listAvailableDriversUsecase } from 'src/app/usecase/driver/list-available-drivers.usecase';
import { DriverProtocol } from 'src/domain/driver/protocol/driver.protocol';
// import { LogRepository } from 'src/infra/repository/driver/log.repository';
// import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AvailableDriversController],
  providers: [
    AvailableDriversService,
    listAvailableDriversUsecase,
    // LogRepository,
    // PrismaService
  ],
})
export class AvailableDriversModule {}
