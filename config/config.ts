import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    database: {
        dbName: process.env.DATABASE_NAME || 'default',
        dbPassword: process.env.DATABASE_PASSWORD || 'default',
        dbUsername: process.env.DATABASE_USERNAME || 'default',
        dbHost: process.env.DATABASE_HOST || 'localhost',
        dbDialect: process.env.DATABASE_DIALECT || 'mysql',
    },
    server: {
        port: Number(process.env.PORT) || 3000,
    },
};

export default config;
