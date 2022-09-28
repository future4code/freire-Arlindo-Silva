import { USER_ROLES } from "../../src/models/User";
import { ITokenPayload } from "../../src/services/Authenticator";

export class AuthenticatorMock {
  public generateToken = (payload: ITokenPayload): string => {
    switch (payload.role) {
      case USER_ROLES.ADMIN:
        return "token-mock-admin";
      case USER_ROLES.NORMAL:
        return "token-mock-normal";
      default:
        return "token-mock-normal";
    }
  };

  public getTokenPayload = (token: string): ITokenPayload | null => {
    switch (token) {
      case "token-mock-admin":
        return {
          id: "id-mock",
          role: USER_ROLES.ADMIN,
        };
      case "token-mock-normal":
        return {
          id: "id-mock",
          role: USER_ROLES.ADMIN,
        };
      default:
        return null;
    }
  };
}
