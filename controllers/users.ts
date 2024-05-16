import { Request, Response } from 'express'

export const getUsers = (_req: Request, res: Response) => {
    res.json({
        msg: 'get users',
    })
}


export const getUser = (req: Request, res: Response) => {
    const { id } = req.params

    res.json({
        msg: 'get user',
        id
    })
}

export const postUser = (req: Request, res: Response) => {
    const { body } = req

    res.json({
        msg: 'post user',
        body,
    })
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