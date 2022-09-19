import connection from "../connection";

export class SelectUser {
  byEmail = async (email: string): Promise<any> => {
    const result = await connection.select("*").from("User").where({ email });

    return result[0];
  };

  byId = async (id: string): Promise<any> => {
    const result = await connection.select("*").from("User").where({ id });

    return result[0];
  };
}
