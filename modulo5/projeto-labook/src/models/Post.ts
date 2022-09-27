export interface IPostDB {
  id: string;
  content: string;
  user_id: string;
  likes?: number;
}

export interface ILikeDB {
  id: string;
  post_id: string;
  user_id: string;
}

export interface IUnlikeDB {
  post_id: string;
  user_id: string;
}

export interface ICreateInputDTO {
  content: string;
  token: string;
}

export interface IDeletePostInputDTO {
  id: string;
  token: string;
}

export interface ILikePostInputDTO {
  id: string;
  token: string;
}

export interface IUnlikePostInputDTO {
  id: string;
  token: string;
}

export class Post {
  constructor(
    private id: string,
    private content: string,
    private userId: string,
    private likes: number = 0
  ) {}

  public getId = () => {
    return this.id;
  };

  public getContent = () => {
    return this.content;
  };

  public getUserId = () => {
    return this.userId;
  };

  public getLikes = () => {
    return this.likes;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setContent = (newContent: string) => {
    this.content = newContent;
  };

  public setUserId = (newUserId: string) => {
    this.userId = newUserId;
  };

  public setLikes = (newLikes: number) => {
    this.likes = newLikes;
  };
}
