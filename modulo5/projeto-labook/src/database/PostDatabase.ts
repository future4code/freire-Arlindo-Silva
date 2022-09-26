import { ILikeDB, IPostDB, IUnlikeDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public insert = async (post: Post) => {
    const newPost: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(newPost);
  };

  public selectAll = async () => {
    const posts: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    ).select();

    for (const post of posts) {
      const likes = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .count("id AS likes")
        .where({ post_id: post.id });
      post.likes = Number(likes[0].likes);
    }

    return posts;
  };

  public selectById = async (id: string) => {
    const posts: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select()
      .where({ id });

    return posts[0];
  };

  public delete = async (id: string) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({ post_id: id });

    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ id });
  };

  public findLike = async (postId: string, userId: string) => {
    const data: ILikeDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_LIKES
    )
      .select()
      .where({ post_id: postId })
      .andWhere({ user_id: userId });

    return data[0];
  };

  public like = async (likePost: ILikeDB) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES).insert(likePost);
  };

  public deleteLike = async (unlikePost: IUnlikeDB) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({ user_id: unlikePost.user_id })
      .andWhere({ post_id: unlikePost.post_id });
  };
}
