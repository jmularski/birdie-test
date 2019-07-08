import CustomError from "./Error";

export class ValidationError extends CustomError {
  constructor(field: string) {
    super(406, `No ${field} has been sent!`);
  }
}
