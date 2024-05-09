import express, { Application } from 'express';
class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
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