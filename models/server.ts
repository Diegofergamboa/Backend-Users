import express, { Application } from 'express';
import userRoutes from '../routes/user';
class Server {
    private app: Application;
    private port: string;
    
    private apiPaths = {
        getUsers: '/api/users',
        getUser: '/api/user/:id',
        postUser: '/api/user',
        updateUser: '/api/user/:id',
        deleteUser: '/api/user/:id'   
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // Define routes
        this.routes();
    }


    routes() {
        this.app.use(this.apiPaths.getUsers, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            try {
                console.log(`Server running on port ${this.port}`);
            } catch (error) {
                console.error(`Error running the server ${error}`)
            }
        })
    }
}

export default Server;