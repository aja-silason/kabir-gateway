import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({

    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],

            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get('DATABASE_URL'),
                // host: configService.get('DATABASE_HOST', 'localhost'),
                // username: configService.get('DATABASE_USER', 'sales'),
                // password: configService.get('DATABASE_PASSWORD', 'sales'),
                // port: Number(configService.get('DATABASE_PORT', 5432)),
                // database: configService.get('DATABASE_DB', 'salesboard'),
                
                entities: [
                    // UserModel
                ],
                synchronize: true,
                migrationsRun: true,
            })
        }),
        //  UserModule,
    ]

})

export class DatabaseModule {}