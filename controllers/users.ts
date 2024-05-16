import { Request, Response } from 'express'
import User from '../models/user'

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.findAll()
    
    try {
        res.json({
            msg: 'get users',
            body: {users}
        })
    } catch (error) {
        throw new Error(`Error getting users ${error}`);
    }
}


export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (!user) {
        res.status(404).json({
            msg: 'User not found',
        })
    } else {
        res.json({
            user
        })
    }
}

export const postUser = async (req: Request, res: Response) => {
    const { name, email, status } = req.body;

    try {
        const newUser = await User.create({ name, email, status });
        await newUser.save()

        res.json({
            msg: 'User created',
            userBody: newUser,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Internal error server',
        })
        throw new Error(`Error creating user ${error}`);
    }
}

export const updateUser = (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params
    console.log(req)

    res.json({
        msg: 'put user',
        body,
        id
    })
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.query

    res.json({
        msg: 'delete user',
        id
    })
}