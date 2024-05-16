import { Sequelize } from "sequelize";
import config from '../config/config';

const { 
    dbName: dbName,
    dbUsername: dbUsername, 
    dbPassword: dbPassword,
    dbHost: dbHost
} = config.database

const db = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    // logging: false
});


export default db