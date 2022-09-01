import { connection } from "./connection";

export default async function selecAllProducts() {
    const result = await connection("labecommerce_products")
    .select("*")
    return result
}