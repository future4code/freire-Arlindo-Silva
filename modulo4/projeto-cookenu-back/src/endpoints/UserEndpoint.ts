import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { PublicDataUser, User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserEndPoint {
  async signUp(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.statusCode = 404;
        throw new Error("Missing parameters");
      }

      if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
      ) {
        res.statusCode = 422;
        throw new Error("Check the type of parameters");
      }

      if (password.length < 6) {
        res.statusCode = 422;
        throw new Error("Password must be 6 or more characteres");
      }

      const userDatabase = new UserDatabase();

      const user = await userDatabase.getByEmail(email);

      if (user) {
        res.statusCode = 409;
        throw new Error("E-mail already registered");
      }

      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(password);

      const newUser = new User(id, name, email, hashPassword);

      await userDatabase.insert(newUser);
      const authenticator = new Authenticator();

      const token = authenticator.generateToken({ id });

      res.status(201).send({ access_token: token });
    } catch (error: any) {
      res.send({ message: error.sqlMessage || error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 404;
        throw new Error("Missing parameters");
      }

      if (typeof email !== "string" || typeof password !== "string") {
        res.statusCode = 422;
        throw new Error("Check the type of parameters");
      }

      if (password.length < 6) {
        res.statusCode = 422;
        throw new Error("Password must be 6 or more characteres");
      }

      const userDatabase = new UserDatabase();

      const user = await userDatabase.getByEmail(email);

      if (!user) {
        res.statusCode = 409;
        throw new Error("E-mail not registered");
      }

      const hashManager = new HashManager();

      const isValid = await hashManager.compare(password, user.getPassword());

      if (!isValid) {
        res.statusCode = 401;
        throw new Error("Invalid Password");
      }

      const authenticator = new Authenticator();

      const token = authenticator.generateToken({ id: user.getId() });

      res.status(200).send({ access_token: token });
    } catch (error: any) {
      res.send({ message: error.sqlMessage || error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 404;
        throw new Error("Missing parameters: token");
      }

      const authenticator = new Authenticator();

      const tokenData = authenticator.getTokenData(token);

      if (!tokenData.id || tokenData.id === "") {
        res.statusCode = 401;
        throw new Error("Invalid token");
      }

      const userDatabase = new UserDatabase();

      let data: User | null = await userDatabase.getById(tokenData.id);

      if (!data) {
        res.statusCode = 409;
        throw new Error("User not found");
      }

      const user: PublicDataUser = data.toPublicModel();

      res.status(200).send(user);
    } catch (error: any) {
      res.send({ message: error.sqlMessage || error.message });
    }
  }

  async getAnotherProfile(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || id === ":id") {
        res.statusCode = 404;
        throw new Error("Missing parameters: id");
      }

      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 404;
        throw new Error("Missing parameters: token");
      }

      const authenticator = new Authenticator();

      const tokenData = authenticator.getTokenData(token);

      if (!tokenData.id || tokenData.id === "") {
        res.statusCode = 401;
        throw new Error("Invalid token");
      }

      const userDatabase = new UserDatabase();

      let data: User | null = await userDatabase.getById(id);

      if (!data) {
        res.statusCode = 409;
        throw new Error("User not found");
      }

      const user: PublicDataUser = data.toPublicModel();

      res.status(200).send(user);
    } catch (error: any) {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}
