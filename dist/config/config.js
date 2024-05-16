"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
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
exports.default = config;
//# sourceMappingURL=config.js.map