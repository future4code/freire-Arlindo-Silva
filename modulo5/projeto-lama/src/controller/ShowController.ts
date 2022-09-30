import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowDTO } from "../models/Show";

export class ShowController {
  constructor(private showBusiness: ShowBusiness) {}

  public create = async (req: Request, res: Response) => {
    try {
      const { band, startsAt } = req.body;
      const token = req.headers.authorization as string;

      const input: ICreateShowDTO = {
        band,
        startsAt,
        token,
      };

      const response = await this.showBusiness.create(input);

      res.status(201).send(response);
    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({
        message: error.sqlMessage || "Erro inesperado no endpoint create show",
      });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({
        message: error.sqlMessage || "Erro inesperado no endpoint login",
      });
    }
  };
}
