import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Send all parameters")
      }

      if (!email.includes("@")) {
         res.statusCode = 422
         throw new Error("Invalid email");         
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error("Password must be 6 or more characteres long");
      }

      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email already registered')
      }
      
      const uuidClass = new GenerateId()
      const id:string = uuidClass.generateId()
    
      const newUser: user = { id, email, password }

      await connection('User')
         .insert(newUser)

      const newToken = new Autheticator()
      const token = newToken.generateToken({id})

      res.status(201).send({ token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}