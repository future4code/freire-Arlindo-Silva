import { Request, Response } from "express"
import insertUser from "../data/insertUser"
import { User } from "../types/typeUser"

let errorCode = 400

export const postUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
      errorCode = 404
      throw new Error("Please send all parameters");      
    }

    const user: User = {
      name,
      email,
      password
    }
    
    await insertUser(user)

    res.status(201).send("User created successfully")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }

}