"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
class Server {
    constructor() {
        this.apiPaths = {
            getUsers: '/api/users',
            getUser: '/api/user/:id',
            postUser: '/api/user',
            updateUser: '/api/user/:id',
            deleteUser: '/api/user/:id'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        // Define routes
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.getUsers, user_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            try {
                console.log(`Server running on port ${this.port}`);
            }
            catch (error) {
                console.error(`Error running the server ${error}`);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map