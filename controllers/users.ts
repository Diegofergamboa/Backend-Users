import { Request, Response } from 'express'
import User from '../models/user'

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.findAll()

    try {
        res.json({
            msg: 'get users',
            body: { users }
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
        const userValidation = await User.findOne({
            where: { email: email }
        });

        if (userValidation) {
            return res.status(400).json({
                msg: 'User already exists',
            });
        } else {
            const newUser = await User.create({ name, email, status });
            await newUser.save();
            return res.json({
                msg: 'User created',
                userBody: newUser,
            });
        };
    } catch (error) {
        res.status(500).json({
            msg: 'Internal error server',
        })
        throw new Error(`Error creating user ${error}`);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params

    if (body.length === undefined) {
        res.json({
            status: 400,
            msg: 'Bad request',
        })
    }

    const userFound = await User.findOne({
        where: { id }
    })

    if (!userFound) {
        res.json({
            status: 404,
            msg: 'User not found',
        })
    } else {
        res.json({
            msg: 'User updated',
            body,
            id
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.query

    if (!id) {
        res.json({
            msg: 'Bad request',
        })
    }

    const userFound = await User.findOne({
        where: { id }
    })

    if (!userFound) {
        res.json({
            status: 404,
            msg: `User not found ${id}`,
        })
    } else {
        await userFound.update({
            state: false
        });
        res.json({
            msg: `User ${id} deledted`,
            id
        })
    }

}