import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigureModule } from './config/config.module';
import { AvailableDriversModule } from './infra/http/available-drivers/available-drivers.module';
import { DatabaseModule } from './infra/db/database.module';

@Module({
  imports: [
    ConfigureModule,
    AvailableDriversModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
