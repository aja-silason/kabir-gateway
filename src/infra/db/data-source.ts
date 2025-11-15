import { DataSource } from "typeorm"

import * as dotenv from "dotenv"

dotenv.config();

export const AppDataSource = new DataSource({

    type: 'postgres',
    host: process.env.DATABASE_URL || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || 'kabir',
    password: process.env.DATABASE_PASSWORD || 'kabir',
    database: process.env.DATABASE_DB || 'bitkabirgateway',
    entities: [],
    migrations: ['src/infra/migration/*.ts'],
});