import connection from "../connection";
import { User } from "../entities/User";

const insertUser = async (user: User): Promise<void> => {
  await connection.insert(user).from("User");
};

export default insertUser;
