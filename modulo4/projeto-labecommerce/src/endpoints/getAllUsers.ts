import { Request, Response } from "express"
import selecAllUsers from "../data/selectAllUsers"

let errorCode = 400

export const getAllUsers = async (req: Request, res: Response) => {
      try {
        const result = await selecAllUsers()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

}