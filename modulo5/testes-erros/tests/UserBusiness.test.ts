import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
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

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      email: "fulano@gmail.com",
      name: "Fulano",
      password: "fulano123",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });

  test("Um token é retornado quando o login é bem-sucedido", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha",
    };

    const response = await userBusiness.login(input);
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-admin");
  });

  test("Retorna erro caso envie um 'name' com menos de 3 caracteres", async () => {
    expect.assertions(2);
    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "",
        password: "bananinha",
      };

      await userBusiness.signup(input);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toEqual(400);
        expect(error.message).toEqual(
          "Parâmetro 'name' inválido: mínimo de 3 caracteres"
        );
      }
    }
  });

  test("Erro quando 'password' for incorreta no login", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "bananinha123",
      };

      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Password incorreto");
      }
    }
  });

  test("Erro quando o email não segue o regex", async () => {
    expect.assertions(2);
    try {
      const input: ILoginInputDTO = {
        email: "astrodevgmail.com",
        password: "bananinha",
      };
      await userBusiness.login(input);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toEqual(400);
        expect(error.message).toEqual("Parâmetro 'email' inválido");
      }
    }
  });
});
