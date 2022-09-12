import { Request, Response } from "express";
import { Autheticator } from "../services/Authenticator";
import getUserById from "../services/GetUserById";


export default async function userData(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const token = req.headers.authorization as string

      const verifyToken = new Autheticator()
      const tokenData = verifyToken.getTokenData(token)
   
      if(!tokenData){
         res.statusCode = 401
         throw new Error("Token inválido")
      }

      const user = await getUserById(tokenData.id)

      if (!user) {
         res.statusCode = 422
         throw new Error('User not found')
      }
      
      res.status(200).send({ user })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}