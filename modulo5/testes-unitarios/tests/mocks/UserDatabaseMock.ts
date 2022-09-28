import { IUserDB, User, USER_ROLES } from "../../src/models/User";
import { BaseDatabase } from "../../src/database/BaseDatabase";

export class UserDatabaseMock extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public toUserDBModel = (user: User): IUserDB => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    return userDB;
  };

  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    // const result: IUserDB[] = await BaseDatabase
    //     .connection(UserDatabase.TABLE_USERS)
    //     .select()
    //     .where({ email })

    // return result[0]
    switch (email) {
      case "adminuser@labenu.com":
        return {
          id: "id-mock",
          name: "Admin User",
          email: "adminuser@labenu.com",
          password: "hash-bananinha",
          role: USER_ROLES.ADMIN,
        };
      case "normaluser@labenu.com":
        return {
          id: "id-mock",
          name: "Normal User",
          email: "normaluser@labenu.com",
          password: "hash-bananinha",
          role: USER_ROLES.NORMAL,
        };
      default:
        return undefined;
    }
  };

  public createUser = async (user: User): Promise<void> => {
    // const userDB = this.toUserDBModel(user);
    // await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };
}
