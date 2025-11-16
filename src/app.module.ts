import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigureModule } from './config/config.module';
import { AvailableDriversModule } from './infra/http/available-drivers/available-drivers.module';
import { DatabaseModule } from './infra/db/database.module';
import { LogsModule } from './infra/http/logs/logs.module';

@Module({
  imports: [
    ConfigureModule,
    AvailableDriversModule,
    DatabaseModule,
    LogsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
