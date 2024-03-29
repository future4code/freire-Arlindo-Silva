import { Request, Response } from "express";
import { SelectUser } from "../data/SelectUser";
import { Autheticator } from "../services/Authenticator";
import { UserRole } from "../entities/User";

export default async function getUserData(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;

    const verifyToken = new Autheticator();
    const tokenData = verifyToken.getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Token inválido");
    }

    if (tokenData.role !== UserRole.NORMAL) {
      res.statusCode;
      throw new Error("Only NORMAL users can access this data");
    }

    const getUser = new SelectUser();
    const { id, name } = await getUser.byId(tokenData.id);

    const user = {
      id,
      name,
    };

    if (!user) {
      res.statusCode = 422;
      throw new Error("User not found");
    }

    res.status(200).send(user);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
