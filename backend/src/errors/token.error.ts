import CustomError from "./Error";

export class TokenNotFound extends CustomError {
  constructor() {
    super(401, "No token present");
  }
}

export class BadToken extends CustomError {
  constructor() {
    super(401, "Wrong token");
  }
}
