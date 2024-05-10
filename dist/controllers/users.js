"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (_req, res) => {
    res.json({
        ok: true,
        msg: 'getUsers',
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'get user',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        ok: true,
        msg: 'post user',
        body,
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'post user',
        body,
        id
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'post user',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map