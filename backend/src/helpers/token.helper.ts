import config from "../config";
import * as jwt from "jsonwebtoken";

export function createToken(id: string) {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: "1y"
  });
}

export async function decryptToken(token: string) {
  return await jwt.verify(token, config.jwtSecret);
}
