import { connection } from "./connection";

export default async function selecAllUsers() {
    const result = await connection("labecommerce_users")
    .select("*")
    return result
}