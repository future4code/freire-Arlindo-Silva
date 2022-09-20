import { Purchase } from "../types/typePurchase";
import { connection } from "./connection";

export default async function insertPurchase(purchase: Purchase) {

    const { user_id ,product_id ,quantity, total_price } = purchase

    const id:string = Date.now().toString()

    await connection("labecommerce_purchases").insert({
        id,
        user_id,
        product_id,
        quantity,
        total_price
    })  

}