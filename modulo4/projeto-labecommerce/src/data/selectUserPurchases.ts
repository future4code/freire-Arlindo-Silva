import { connection } from "./connection";

export default async function selectUserPurchases(id: string) {
    const result = await connection("labecommerce_purchases")
    .select("*").where({user_id: id})

    console.log(result);
    
    return result
}