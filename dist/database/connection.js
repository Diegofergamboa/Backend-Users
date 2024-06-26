"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const { dbName: dbName, dbUsername: dbUsername, dbPassword: dbPassword, dbHost: dbHost } = config_1.default.database;
const db = new sequelize_1.Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map