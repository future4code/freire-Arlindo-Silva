import { BaseError } from "./BaseError";

export class CustomError extends BaseError {
  constructor(message: string, errorCode: number) {
    super(errorCode, message);
  }
}
