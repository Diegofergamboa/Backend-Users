"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
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