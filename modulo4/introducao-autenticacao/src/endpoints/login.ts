import { Request, Response } from "express";
import { Autheticator } from "../services/Authenticator";
import getUserByEmail from "../services/GetUserByEmail";

export default async function login(
   req: Request,
   res: Response
): Promise<void>{
    try {

        const {email,password} = req.body

        if(!email || !password){
            res.statusCode = 422
            throw new Error("Send all parameters")
        }

        if (!email.includes("@")) {
            res.statusCode = 422
            throw new Error("Invalid e-mail");            
        }

        const user = await getUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found");            
        }

        if(user.password !== password){
            res.statusCode = 409
            throw new Error("Invalid password")
        }
       
        const newToken = new Autheticator()
        const token = newToken.generateToken({id: user.id})

        res.status(200).send({token})
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}