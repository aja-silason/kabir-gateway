import { DataSource } from "typeorm"

import * as dotenv from "dotenv"
// import { LoggsEntity } from "src/domain/logs/entity/logs.entity";
import { LoggsEntity } from "../../domain/logs/entity/logs.entity";

dotenv.config();

const AppDataSource = new DataSource({

    type: 'postgres',
    url: process.env.DATABASE_URL,
    // port: Number(process.env.DATABASE_PORT) || 5432,
    // username: process.env.DATABASE_USER || 'kabir',
    // password: process.env.DATABASE_PASSWORD || 'kabir',
    // database: process.env.DATABASE_DB || 'bitkabirgateway',
    entities: [LoggsEntity],
    migrations: ['src/infra/db/migration/*.ts'],
    synchronize: false,
});

export default AppDataSource;