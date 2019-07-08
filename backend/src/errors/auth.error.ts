import CustomError from "./Error";

export class UserNotFound extends CustomError {
  constructor() {
    super(401, "User with given id was not found!");
  }
}
