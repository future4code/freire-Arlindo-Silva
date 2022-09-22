import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ParamsError } from "../errors/ParamsError";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public async signup(req: Request, res: Response) {
    try {
      const { name, password, email } = req.body;

      if (!name || !password || !email) {
        throw new ParamsError();
      }
    } catch (error: any) {
      res.send({ message: error.sqlMessage || error.message });
    }
  }

  public async login(req: Request, res: Response) {}

  public async createPost(req: Request, res: Response) {}
}
