import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAdress } from "../services/getFullAdress"

let errorCode = 500

export const insertAdress = async (req: Request, res: Response) => {
        try {
                const cep = req.params.cep
                const number = Number(req.body.number)
                const complement = req.body.complement? req.body.complement : null
                if (!number || isNaN(number)) {
                        errorCode = 422
                        throw new Error("Numero inválido");                        
                }
                const address = await getFullAdress(cep)
                if (!address || undefined) {
                        errorCode = 404
                        throw new Error("Cep inválido")
                }
                await insertAdressDb(address, cep, number, complement)
                res.status(200).send("Endereço criado com sucesso")

        } catch (error: any) {
                res.status(errorCode).send(error.message)
        }

}