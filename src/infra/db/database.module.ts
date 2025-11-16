import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggsEntity } from "src/domain/logs/entity/logs.entity";
import { LogsModule } from "../http/logs/logs.module";

@Module({

    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],

            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get('DATABASE_URL'),
                entities: [
                    LoggsEntity
                ],
                synchronize: true,
                migrationsRun: true,
            })
        }),
        LogsModule
    ]

})

export class DatabaseModule {}