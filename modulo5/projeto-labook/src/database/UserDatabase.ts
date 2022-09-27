import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public insert = async (user: User) => {
    const newUser: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUser);
  };

  public getByEmail = async (email: string) => {
    const users: IUserDB[] = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ email });

    return users[0];
  };
}
