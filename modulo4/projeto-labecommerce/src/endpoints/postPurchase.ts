import { Request, Response } from "express"
import insertPurchase from "../data/insertPurchase"
import selectProductById from "../data/selectProductById"
import selectUserById from "../data/selectUserById"
import { Purchase } from "../types/typePurchase"

let errorCode = 400

export const postPurchase = async (req: Request, res: Response) => {
  try {
    const { user_id, product_id, quantity } = req.body
    
    if (!user_id || !product_id || !quantity) {
      errorCode = 404
      throw new Error("Please send all parameters");      
    }

    if (typeof(quantity) !== "number") {
      errorCode = 422
      throw new Error("The quantity must be of the number type");
    }

    const product = await selectProductById(product_id)

    if (product && product.length < 1 || !product) {
      errorCode = 404
      throw new Error("Product not found");      
    }

    const user = await selectUserById(user_id)

    if (user && user.length < 1 || !user) {
      errorCode = 404
      throw new Error("User not found");     
    }

    const purchase: Purchase = {
      user_id,
      product_id,
      quantity,
      total_price: quantity * product.price
    }
  
    await insertPurchase(purchase)

    res.status(201).send("Purchase registered successfully")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

}