import { Request, Response } from "express"
import selectUserById from "../data/selectUserById"
import selectUserPurchases from "../data/selectUserPurchases"

let errorCode = 400

export const getUserPurchases = async (req: Request, res: Response) => {
      try {
       
        const id = req.params.user_id

        if (!id || id === ':user_id') {
            errorCode = 404
            throw new Error("Invalid id");            
        }

        const user = await selectUserById(id)

        if (!user || user.length < 1) {
            errorCode = 404
            throw new Error("User not found");            
        }

        const result = await selectUserPurchases(id)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

}