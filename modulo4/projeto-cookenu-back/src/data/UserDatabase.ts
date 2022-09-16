import { BaseDatabase } from "./BaseDatabase";
import { User } from "../entities/User";

export class UserDatabase extends BaseDatabase {
  public async insert(user: User): Promise<void> {
    try {
      await BaseDatabase.connection("cookenu_user").insert(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getByEmail(email: string): Promise<User | null> {
    try {
      const data = await BaseDatabase.connection
        .select("*")
        .from("cookenu_user")
        .where("email", email);

      const user = User.toUserModel(data[0]);
      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getById(id: string): Promise<User | null> {
    try {
      const data = await BaseDatabase.connection
        .select("*")
        .from("cookenu_user")
        .where("id", id);

      const user = User.toUserModel(data[0]);
      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
