import { connection } from "../connection"

export default async function selectAllUsers(
   name: string,
   type: string,
   offset: number,
   orderBy: string,
   order: string
   ):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${name}%" AND type LIKE "%${type}%"
      ORDER BY ${orderBy} ${order}
      LIMIT 5
      OFFSET ${offset};
   `)
   return result[0]
}