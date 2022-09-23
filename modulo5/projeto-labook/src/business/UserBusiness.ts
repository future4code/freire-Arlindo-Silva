import { UserDatabase } from "../database/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { ParamsError } from "../errors/ParamsError";
import { ISignupInputDTO, User, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (data: ISignupInputDTO) => {
    const { name, password, email } = data;
    let { role } = data;

    if (!name || !password || !email) {
      throw new ParamsError();
    }

    if (!role) {
      role = USER_ROLES.NORMAL;
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      throw new ParamsError();
    }

    if (password.length < 6) {
      throw new CustomError("A senha deve ter 6 ou mais caracteres", 422);
    }

    const user = await this.userDatabase.getByEmail(email);

    if (user) {
      throw new CustomError("Email já cadastrado", 409);
    }

    const id = this.idGenerator.generate();

    const hashPassword = await this.hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword, role);

    await this.userDatabase.insert(newUser);

    const token = this.authenticator.generateToken({ id, role });

    return token;
  };
}
