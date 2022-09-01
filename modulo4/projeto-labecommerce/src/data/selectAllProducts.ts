import { connection } from "./connection";

export default async function selecAllProducts(order: string, search: string) {
    
    
    const result = await connection("labecommerce_products")
    .select("*").where('name', 'like', `%${search}%`).orderBy("name", `${order}`)
    return result
}