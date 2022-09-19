import connection from "../connection";

const getUserById = async(id: string): Promise<any> => {
  const result = await connection
    .select("id, email")
    .from("User")
    .where({ id });

  return result[0];
}

export default getUserById
