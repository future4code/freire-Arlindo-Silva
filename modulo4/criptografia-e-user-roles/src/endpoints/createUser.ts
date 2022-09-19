import { Request, Response } from "express";
import { User } from "../entities/User";
import { IdGenerator } from "../services/IdGenerator";
import { Autheticator } from "../services/Authenticator";
import { hashManager } from "../services/hashManager";
import { SelectUser } from "../data/SelectUser";
import insertUser from "../data/InsertUser";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error("Send all parameters");
    }

    if (!email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Invalid email");
    }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("Password must be 6 or more characteres long");
    }

    const hash = new hashManager();
    const hashPassword = await hash.hash(password);
    console.log(hashPassword);

    const getUser = new SelectUser();
    const user = await getUser.byEmail(email);

    if (user) {
      res.statusCode = 409;
      throw new Error("Email already registered");
    }

    const generator = new IdGenerator();
    const id: string = generator.generateId();

    const newUser: User = { id, name, email, password: hashPassword, role };

    await insertUser(newUser);

    const newToken = new Autheticator();
    const token = newToken.generateToken({ id, role });

    res.status(201).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
