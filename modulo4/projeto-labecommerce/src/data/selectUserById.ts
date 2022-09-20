import { connection } from "./connection";

export default async function selectUserById(id: string) {
    const result = await connection("labecommerce_users")
    .select("*").where({id: id})
    return result[0]
}