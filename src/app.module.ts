import { Module} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigureModule } from './config/config.module';
import { AvailableDriversModule } from './infra/http/available-drivers/available-drivers.module';
import { DatabaseModule } from './infra/db/database.module';
import { LogsModule } from './infra/http/logs/logs.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [

    ThrottlerModule.forRoot({
      throttlers: [
        {
          limit: 10,
          ttl: 60,  
        },
      ],
      errorMessage: 'Too many requests',
    }),

    CacheModule.register({
      ttl: 30,
      max: 100,
    }),

    ConfigureModule,
    AvailableDriversModule,
    DatabaseModule,
    LogsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
