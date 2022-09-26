import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import {
  ICreateInputDTO,
  IDeletePostInputDTO,
  ILikePostInputDTO,
  IUnlikePostInputDTO,
} from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public create = async (req: Request, res: Response) => {
    try {
      const { content } = req.body;

      const token = req.headers.authorization as string;

      const data: ICreateInputDTO = {
        content,
        token,
      };

      const response = await this.postBusiness.create(data);

      res.status(201).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.postBusiness.getAll(token);

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const postToDelete: IDeletePostInputDTO = {
        id,
        token,
      };

      const response = await this.postBusiness.delete(postToDelete);

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public like = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const postToLike: ILikePostInputDTO = {
        id,
        token,
      };

      const response = await this.postBusiness.like(postToLike);

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };

  public unlike = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const postToUnlike: IUnlikePostInputDTO = {
        id,
        token,
      };

      const response = await this.postBusiness.unlike(postToUnlike);

      res.status(200).send(response);
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.sqlMessage || error.message });
    }
  };
}
