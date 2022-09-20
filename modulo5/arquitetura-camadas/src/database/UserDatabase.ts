import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Arq_Users";

  public async insert(user: User) {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(
      user.getUser()
    );
    return `Usuario cadastrado com sucesso`;
  }

  async selectByEmail(email: string): Promise<User | undefined> {
    const result = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ email });

    if (!result[0]) {
      return undefined;
    }

    const { id, name, password, role } = result[0];

    return new User(id, name, email, password, role);
  }

  async selectBySearch(search: string, offset: number) {
    const result = await BaseDatabase.connection
      .select("id", "name", "email")
      .from(UserDatabase.TABLE_USERS)
      .whereLike("name", `%${search || ""}%`)
      .orWhereLike("email", `%${search || ""}%`)
      .orderBy("name")
      .limit(2)
      .offset(offset);

    console.log(result);

    return result;
  }

  async delete(id: string) {
    await BaseDatabase.connection
      .delete()
      .from(UserDatabase.TABLE_USERS)
      .where({ id });
  }
}
