import express, { Application } from 'express';
import userRoutes from '../routes/user';
import cors from 'cors';
import db from '../database/connection';
import config from '../config/config';

class Server {
    private app: Application;
    private port: string;

    private apiPaths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = config.server.port.toString();
        
        // Connect to database
        this.dbConnection();

        // Define middlewares
        this.middlewares();

        // Define routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Body Parser
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static('public'));
    }

    routes() {
        // Obtain routes
        this.app.use(this.apiPaths.users, userRoutes);
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error('Error connecting to database ' + error);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;
