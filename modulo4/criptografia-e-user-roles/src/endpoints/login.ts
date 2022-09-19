import { Request, Response } from "express";
import { SelectUser } from "../data/SelectUser";
import { Autheticator } from "../services/Authenticator";
import { hashManager } from "../services/hashManager";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Send all parameters");
    }

    if (!email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Invalid e-mail");
    }

    const getUser = new SelectUser();
    const user = await getUser.byEmail(email);

    if (!user) {
      res.statusCode = 404;
      throw new Error("User not found");
    }

    const hash = new hashManager();
    const isValid = await hash.compare(password, user.password);

    if (!isValid) {
      res.statusCode = 409;
      throw new Error("Invalid password");
    }

    const newToken = new Autheticator();
    const token = newToken.generateToken({ id: user.id, role: user.role });

    res.status(200).send({ token });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
