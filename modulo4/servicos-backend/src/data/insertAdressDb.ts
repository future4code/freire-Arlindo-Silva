import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(
    adress: Address,
    cep: string,
    number: number,
    complement: string
    ) {

    const {logradouro,bairro,cidade,estado} = adress
    const id_user:string = Date.now().toString()
    const numero = number
    const complemento = complement

    await connection("users_ceps").insert({
        id_user,
        cep,
        logradouro,
        numero, 
        complemento,
        bairro,
        cidade,
        estado
    })  

}