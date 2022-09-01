import { Product } from "../types/typeProduct";
import { connection } from "./connection";

export default async function insertProduct(product: Product) {

    const { name ,price ,image_url } = product

    const id:string = Date.now().toString()

    await connection("labecommerce_products").insert({
        id,
        name,
        price,
        image_url
    })  

}