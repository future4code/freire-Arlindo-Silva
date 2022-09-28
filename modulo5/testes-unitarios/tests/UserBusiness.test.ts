import { UserBusiness } from "../src/business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Verificando se usuario consegue cadastrar uma nova conta", async () => {
    const input: ISignupInputDTO = {
      email: "testando@labenu.com",
      name: "User Teste",
      password: "bananinha",
    };

    const response = await userBusiness.signup(input);
    expect(response.token).toBe("token-mock-normal");
  });

  test("Verificando se o usuario consegue fazer login", async () => {
    const input: ILoginInputDTO = {
      email: "normaluser@labenu.com",
      password: "bananinha",
    };

    const response = await userBusiness.login(input);
    expect(response.token).toBe("token-mock-normal");
  });
});
