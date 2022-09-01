import { User } from "../types/typeUser";
import { connection } from "./connection";

export default async function insertUser(user: User) {

    const { name ,email ,password } = user
    const id:string = Date.now().toString()

    await connection("labecommerce_users").insert({
        id,
        name,
        email,
        password
    })  

}