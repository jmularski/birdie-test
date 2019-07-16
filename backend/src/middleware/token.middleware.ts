import { Request, NextFunction, Response, RequestHandler } from "express";
import { BadToken } from "../errors/token.error";
import { ValidationError } from "../errors/validation.error";
import { decryptToken } from "../helpers/token.helper";

const tokenReader: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers && req.headers["authorization"]) {
    try {
      res.locals.jwtToken = await decryptToken(req.headers["authorization"]);
      next();
    } catch (e) {
      next(new BadToken());
    }
  } else {
    next(new ValidationError("token"));
  }
};

export default tokenReader;
