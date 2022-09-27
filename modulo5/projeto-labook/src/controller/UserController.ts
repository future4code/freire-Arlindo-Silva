import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

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

      const response = await this.userBusiness.signup(user);

      res.status(201).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.login(input);

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public async createPost(req: Request, res: Response) {}
}
