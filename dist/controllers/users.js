"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (_req, res) => {
    res.json({
        msg: 'get users',
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get user',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post user',
        body,
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    console.log(req);
    res.json({
        msg: 'put user',
        body,
        id
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.query;
    res.json({
        msg: 'delete user',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map