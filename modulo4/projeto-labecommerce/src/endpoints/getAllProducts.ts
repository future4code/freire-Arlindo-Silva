import { Request, Response } from "express"
import selecAllProducts from "../data/selectAllProducts"

let errorCode = 400

export const getAllProducts = async (req: Request, res: Response) => {
      try {
        const result = await selecAllProducts()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

}