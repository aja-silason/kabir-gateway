import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigureModule } from './config/config.module';
import { AvailableDriversModule } from './infra/http/available-drivers/available-drivers.module';

@Module({
  imports: [ConfigureModule, AvailableDriversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
