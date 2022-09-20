import { UserDatabase } from "../database/UserDatabase";
import { CustomError } from "../error/CustomError";
import { MissingFields } from "../error/MissingFields";
import { User, UserDTO, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  async signup(userDTO: UserDTO): Promise<string> {
    const { name, email, password } = userDTO;
    let { role } = userDTO;

    if (!name || !email || !password) {
      throw new MissingFields();
    }

    if (!role) {
      role = USER_ROLES.NORMAL;
    }

    if (password.length < 6) {
      throw new CustomError("Password must be 6 or more caracteres", 422);
    }

    if (name.length < 3) {
      throw new CustomError("Name must be 3 or more caracteres", 422);
    }

    if (!email.includes("@") || !email.includes(".")) {
      throw new CustomError("Invalid email", 422);
    }

    if (
      role.toUpperCase() !== USER_ROLES.NORMAL &&
      role.toUpperCase() !== USER_ROLES.ADMIN
    ) {
      throw new CustomError("User must be NORMAL or ADMIN", 422);
    }

    const userDatabase = new UserDatabase();

    const user = await userDatabase.selectByEmail(email);

    if (user) {
      throw new CustomError("Email already exists", 409);
    }

    const idGenerator = new IdGenerator();

    const id = idGenerator.generate();

    const hashPassword = await new HashManager().hash(password);

    const newUser = new User(id, name, email, hashPassword, role);

    const response = await userDatabase.insert(newUser);

    if (response) {
      const token = new Authenticator().generateToken({ id, role });

      return token;
    }
  }

  async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new MissingFields();
    }

    if (password.length < 6) {
      throw new CustomError("Password must be 6 or more caracteres", 422);
    }

    if (!email.includes("@") || !email.includes(".")) {
      throw new CustomError("Invalid email", 422);
    }

    const userDatabase = new UserDatabase();

    const user = await userDatabase.selectByEmail(email);

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    const isValid = await new HashManager().compare(
      password,
      user.getPassword()
    );

    if (!isValid) {
      throw new CustomError("Invalid password", 401);
    }

    const token = new Authenticator().generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    return token;
  }

  async search(token: string, search: string, page: number): Promise<any> {
    const userDatabase = new UserDatabase();

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenPayload(token);

    if (!tokenData.id) {
      throw new CustomError("Invalid Token", 401);
    }

    if (!page || isNaN(page)) {
      page = 1;
    }

    const users = await userDatabase.selectBySearch(search, (page - 1) * 2);

    if (users.length === 0) {
      throw new CustomError("No user found for this search", 404);
    }

    return users;
  }

  async delete(token: string, id: string): Promise<void> {
    const userDatabase = new UserDatabase();

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenPayload(token);

    if (!tokenData.id) {
      throw new CustomError("Invalid Token", 401);
    }

    if (tokenData.role !== USER_ROLES.ADMIN) {
      throw new CustomError("Access denied, only admins can delete users", 401);
    }

    if (tokenData.id === id) {
      throw new CustomError("User cannot be deleted by himself", 401);
    }

    await userDatabase.delete(id);
  }
}
