import * as jwt from "jsonwebtoken";

interface AuthenticationData {
  id: string;
}

export class Authenticator {
  public generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.EXPIRES_IN,
    });
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    const tokenData = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AuthenticationData;
    return tokenData;
  };
}
