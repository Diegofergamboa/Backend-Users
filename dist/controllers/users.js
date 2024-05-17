"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    try {
        res.json({
            msg: 'get users',
            body: { users }
        });
    }
    catch (error) {
        throw new Error(`Error getting users ${error}`);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: 'User not found',
        });
    }
    else {
        res.json({
            user
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, status } = req.body;
    try {
        const userValidation = yield user_1.default.findOne({
            where: { email: email }
        });
        if (userValidation) {
            return res.status(400).json({
                msg: 'User already exists',
            });
        }
        else {
            const newUser = yield user_1.default.create({ name, email, status });
            yield newUser.save();
            return res.json({
                msg: 'User created',
                userBody: newUser,
            });
        }
        ;
    }
    catch (error) {
        res.status(500).json({
            msg: 'Internal error server',
        });
        throw new Error(`Error creating user ${error}`);
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    if (body.length === undefined) {
        res.json({
            status: 400,
            msg: 'Bad request',
        });
    }
    const userFound = yield user_1.default.findOne({
        where: { id }
    });
    if (!userFound) {
        res.json({
            status: 404,
            msg: 'User not found',
        });
    }
    else {
        res.json({
            msg: 'User updated',
            body,
            id
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id) {
        res.json({
            msg: 'Bad request',
        });
    }
    const userFound = yield user_1.default.findOne({
        where: { id }
    });
    if (!userFound) {
        res.json({
            status: 404,
            msg: `User not found ${id}`,
        });
    }
    else {
        yield userFound.update({
            state: false
        });
        res.json({
            msg: `User ${id} deledted`,
            id
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map