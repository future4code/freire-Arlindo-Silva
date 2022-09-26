import { PostDatabase } from "../database/PostDatabase";
import { ParamsError } from "../errors/ParamsError";
import { AuthenticationError } from "../errors/AuthenticationError";
import {
  ICreateInputDTO,
  IDeletePostInputDTO,
  ILikeDB,
  ILikePostInputDTO,
  IUnlikeDB,
  IUnlikePostInputDTO,
  Post,
} from "../models/Post";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { CustomError } from "../errors/CustomError";
import { NotFoundError } from "../errors/NotFoundError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public create = async (data: ICreateInputDTO) => {
    const { token, content } = data;

    if (!token || !content) {
      throw new ParamsError();
    }

    const tokenData: ITokenPayload | null =
      this.authenticator.getTokenPayload(token);

    if (!tokenData || (tokenData && !tokenData.id)) {
      throw new AuthenticationError();
    }

    if (content.length < 1) {
      throw new CustomError("O post deve conter um ou mais caracteres", 422);
    }

    const id = this.idGenerator.generate();

    const newPost = new Post(id, content, tokenData.id);

    await this.postDatabase.insert(newPost);

    return { message: "Post criado com sucesso" };
  };

  public getAll = async (token: string) => {
    if (!token) {
      throw new AuthenticationError();
    }

    const tokenData: ITokenPayload | null =
      this.authenticator.getTokenPayload(token);

    if (!tokenData || (tokenData && !tokenData.id)) {
      throw new AuthenticationError();
    }

    const posts = await this.postDatabase.selectAll();

    return posts;
  };

  public delete = async (postToDelete: IDeletePostInputDTO) => {
    const { id, token } = postToDelete;

    if (!token || !id) {
      throw new ParamsError();
    }

    const tokenData: ITokenPayload | null =
      this.authenticator.getTokenPayload(token);

    if (!tokenData || (tokenData && !tokenData.id)) {
      throw new AuthenticationError();
    }

    const post = await this.postDatabase.selectById(id);

    if (!post) {
      throw new NotFoundError();
    }

    if (tokenData.role !== "ADMIN") {
      if (post.user_id !== tokenData.id) {
        throw new AuthorizationError();
      }
    }

    await this.postDatabase.delete(id);

    return { message: "Post deletado com sucesso" };
  };

  public like = async (postToLike: ILikePostInputDTO) => {
    const { id, token } = postToLike;

    if (!token || !id) {
      throw new ParamsError();
    }

    const tokenData: ITokenPayload | null =
      this.authenticator.getTokenPayload(token);

    if (!tokenData || (tokenData && !tokenData.id)) {
      throw new AuthenticationError();
    }

    const post = await this.postDatabase.selectById(id);

    if (!post) {
      throw new NotFoundError();
    }

    const likes = await this.postDatabase.findLike(id, tokenData.id);

    if (likes) {
      throw new ConflictError();
    }

    const likeId = this.idGenerator.generate();

    const likePost: ILikeDB = {
      id: likeId,
      post_id: id,
      user_id: tokenData.id,
    };

    await this.postDatabase.like(likePost);

    return { message: "Post curtido com sucesso" };
  };

  public unlike = async (postToUnlike: IUnlikePostInputDTO) => {
    const { id, token } = postToUnlike;

    if (!token || !id) {
      throw new ParamsError();
    }

    const tokenData: ITokenPayload | null =
      this.authenticator.getTokenPayload(token);

    if (!tokenData || (tokenData && !tokenData.id)) {
      throw new AuthenticationError();
    }

    const post = await this.postDatabase.selectById(id);

    if (!post) {
      throw new NotFoundError();
    }

    const likes = await this.postDatabase.findLike(id, tokenData.id);

    if (!likes) {
      throw new CustomError("Post não está curtido", 404);
    }

    const unlikePost: IUnlikeDB = {
      post_id: id,
      user_id: tokenData.id,
    };

    await this.postDatabase.deleteLike(unlikePost);

    return { message: "Post descurtido com sucesso" };
  };
}
