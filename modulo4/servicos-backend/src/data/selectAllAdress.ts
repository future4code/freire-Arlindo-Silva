import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function selecAllAdress() {
    const result = await connection("users_ceps")
    .select("*")
    return result
}