import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, password, email, role } = req.body;

      const user: ISignupInputDTO = {
        name,
        password,
        email,
        role,
      };

      const token = await this.userBusiness.signup(user);

      res.status(201).send({ access_token: token });
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public async login(req: Request, res: Response) {}

  public async createPost(req: Request, res: Response) {}
}
