import { UserDatabase } from "../database/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { ParamsError } from "../errors/ParamsError";
import {
  ILoginInputDTO,
  ISignupInputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
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

    if (role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN) {
      throw new CustomError("role só pode ser: NORMAL ou ADMIN", 422);
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

    const payload: ITokenPayload = {
      id,
      role,
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Usuário criado com sucesso",
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new ParamsError();
    }

    if (typeof email !== "string" || email.length < 3) {
      throw new CustomError("Parâmetro 'email' inválido", 422);
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new CustomError("Parâmetro 'email' inválido", 422);
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new CustomError("Parâmetro 'password' inválido", 422);
    }

    const userDB = await this.userDatabase.getByEmail(email);

    if (!userDB) {
      throw new CustomError("Email não cadastrado", 404);
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new CustomError("Senha incorreta", 401);
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Login realizado com sucesso",
      token,
    };

    return response;
  };
}
