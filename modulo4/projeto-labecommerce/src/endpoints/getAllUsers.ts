import { Request, Response } from "express"
import selecAllUsers from "../data/selectAllUsers"
import selectProductById from "../data/selectProductById"
import selectUserPurchases from "../data/selectUserPurchases"

let errorCode = 400

export const getAllUsers = async (req: Request, res: Response) => {
      try {
        const users = await selecAllUsers()
        
        for (const user of users) {
            let purchases = await selectUserPurchases(user.id)
            for (const purchase of purchases) {
                const { name } = await selectProductById(purchase.product_id)
                purchase.product = name
            }
            purchases = purchases.map(purchase => {
                return{
                    id: purchase.id,
                    product: purchase.product,
                    quantity: purchase.quantity,
                    total_price: purchase.total_price
                }
            })
            user.puchases = purchases
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

}