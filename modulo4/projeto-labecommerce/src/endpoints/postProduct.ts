import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { Product } from "../types/typeProduct"

let errorCode = 400

export const postProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, image_url } = req.body
    
    if (!name || !price || !image_url) {
      errorCode = 404
      throw new Error("Please send all parameters");      
    }

    if (typeof(price) !== "number") {
      errorCode = 422
      throw new Error("The price must be of the number type");
    }

    const product: Product = {
      name,
      price,
      image_url
    }
    
    await insertProduct(product)

    res.status(201).send("Product registered successfully")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

}