import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";
import { PostBusiness } from "../src/business/PostBusiness";
import {
  ICreatePostInputDTO,
  IGetPostsInputDTO,
  Post,
} from "../src/models/Post";

describe("Testando a PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Verificando se usuario consegue criar um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Post de teste",
    };

    const response = await postBusiness.createPost(input);

    expect(response.message).toBe("Post criado com sucesso");
    expect(response.post).toBeInstanceOf(Post);
    expect(response.post.getId()).toBe("id-mock");
    expect(response.post.getContent()).toBe("Post de teste");
    expect(response.post.getLikes()).toBe(0);
    expect(response.post.getUserId()).toBe("id-mock");
  });

  test("Verificando se usuario consegue pegar os posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };

    const response = await postBusiness.getPosts(input);

    expect(response.posts[0]).toBeInstanceOf(Post);
  });
});
