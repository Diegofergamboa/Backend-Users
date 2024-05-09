import { Request, Response } from 'express'
export const getUsers = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'getUsers',
    })
}


export const getUser = (req: Request, res: Response) => {
    const { id } = req.params
    res.json({
        ok: true,
        msg: 'get user',
        id
    })
}

export const postUser = (req: Request, res: Response) => {
    const { body } = req
    res.json({
        ok: true,
        msg: 'post user',
        body,
    })
}

export const updateUser = (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params

    res.json({
        ok: true,
        msg: 'post user',
        body,
        id
    })
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params

    res.json({
        ok: true,
        msg: 'post user',
        id
    })
}