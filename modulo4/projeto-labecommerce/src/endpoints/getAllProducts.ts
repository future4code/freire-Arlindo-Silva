import { Request, Response } from "express"
import selecAllProducts from "../data/selectAllProducts"

let errorCode = 400

export const getAllProducts = async (req: Request, res: Response) => {
      try {

        let order = req.query.order as string || ""

        if (order !== "" && order !== "asc" && order !== "desc") {
            order = ""
        }

        const search = req.query.search as string || ""

        const result = await selecAllProducts(order, search)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

}