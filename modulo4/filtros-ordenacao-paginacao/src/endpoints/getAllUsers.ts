import express, { Request, Response} from "express";
import selectAllUsers from "../querys/selectAllUsers";

export const getAllUsers = async(req: Request ,res: Response ): Promise<void> =>{
    try {
      let name = req.query.name as string    
      if (!name) {
         name = ""
      }   
      let typeUser = req.params.type
      if (!typeUser || typeUser === ':type'){
         typeUser = ""
      }
      let orderBy = req.query.orderBy
      let order = req.query.order as string
      if (!orderBy) {
         orderBy = "name"
      }
      if (orderBy !== "name" && orderBy !== "user") {
         throw new Error("Check the 'otherBy' parameter (valid values: name | user)");         
      }
      if (!order) {
         order = "DESC"
      }
      let page = Number(req.query.page)
      if (!page) {
         page = 1
      }
      
      const users = await selectAllUsers(name, typeUser, ((page -1) * 5), orderBy, order)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }