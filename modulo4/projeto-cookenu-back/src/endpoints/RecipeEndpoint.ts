import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeEndpoint {
  async create(req: Request, res: Response) {
    try {
      const recipeDatabase = new RecipeDatabase();

      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 404;
        throw new Error("Missing parameters: token");
      }

      const authenticator = new Authenticator();

      const tokenData = authenticator.getTokenData(token);

      if (!tokenData.id || tokenData.id === "") {
        res.statusCode = 401;
        throw new Error("Invalid token");
      }

      const { title, description } = req.body;

      const date: Date = new Date();

      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();

      const recipe = new Recipe(id, tokenData.id, title, description, date);

      await recipeDatabase.insert(recipe);

      res.status(201).end();
    } catch (error: any) {
      res.send(error.sqlMessage || error.message);
    }
  }

  public async getRecipe(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || id === ":id") {
        res.statusCode = 404;
        throw new Error("Missing parameters: id");
      }

      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 404;
        throw new Error("Missing parameters: token");
      }

      const recipeDatabase = new RecipeDatabase();

      const data = await recipeDatabase.getById(id);

      if (!data) {
        res.statusCode = 404;
        throw new Error("Recipe not found");
      }

      console.log(data);

      const recipe = data.toPublicModel();

      res.status(200).send(recipe);
    } catch (error: any) {
      res.send(error.sqlMessage || error.message);
    }
  }
}
