import { Request, NextFunction, Response, RequestHandler } from "express";
import { BadToken } from "../errors/token.error";
import { ValidationError } from "../errors/validation.error";
import { verify } from "jsonwebtoken";

const tokenReader: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers && req.headers["authorization"]) {
    try {
      res.locals.jwtToken = await verify(
        req.headers["authorization"],
        "helloworld"
      );
      next();
    } catch (e) {
      next(new BadToken());
    }
  } else {
    next(new ValidationError("token"));
  }
};

export default tokenReader;
