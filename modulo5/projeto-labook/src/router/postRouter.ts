import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../database/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const postRouter = Router();

const postController = new PostController(
  new PostBusiness(new PostDatabase(), new IdGenerator(), new Authenticator())
);

postRouter.post("/", postController.create);
postRouter.get("/", postController.getAll);
postRouter.delete("/:id", postController.delete);
postRouter.post("/:id/like", postController.like);
postRouter.put("/:id/unlike", postController.unlike);
