import {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler
} from "express-serve-static-core";
import CustomError from "../errors/Error";

const errorMiddleware: ErrorRequestHandler = (
  err: CustomError,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong with our backend";
  res.status(status).json({ status, error: message });
};

export default errorMiddleware;
