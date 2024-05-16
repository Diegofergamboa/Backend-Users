import config from './config/config';
import Server from './models/server';

// Dotenv setup

const server = new Server();
server.listen();