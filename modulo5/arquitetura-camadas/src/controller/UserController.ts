import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../models/User";

export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      const user: UserDTO = {
        name,
        email,
        password,
        role,
      };

      const userBusiness = new UserBusiness();

      const token = await userBusiness.signup(user);

      res.status(201).send({ token });
    } catch (error) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const userBusiness = new UserBusiness();

      const token = await userBusiness.login(email, password);

      res.status(200).send({ token });
    } catch (error) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async users(req: Request, res: Response) {
    try {
      const search = req.query.search as string;
      const page = Number(req.query.page);

      const token = req.headers.authorization;

      const userBusiness = new UserBusiness();

      const users = await userBusiness.search(token, search, page);

      res.status(200).send({ Users: users });
    } catch (error) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const id = req.params.id;

      const userBusiness = new UserBusiness();

      await userBusiness.delete(token, id);

      res.status(200).send({ Message: "User deleted" });
    } catch (error) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
