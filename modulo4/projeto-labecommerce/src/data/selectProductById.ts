import { connection } from "./connection";

export default async function selectProductById(id: string) {
    const result = await connection("labecommerce_products")
    .select("*").where({id: id})
    return result[0]
}