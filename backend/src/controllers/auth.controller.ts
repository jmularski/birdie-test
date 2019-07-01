import { Router, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import Event from "../models/event.model";
import config from "../config";

export const authController = Router();

authController.post("/login", async (req: Request, res: Response) => {
  let { id } = req.body;

  if (!id) {
    return res.status(400).json({
      error: "No id has been sent!"
    });
  }

  // naming this variable user cause I need to make all the other requests by some param
  const user = await Event.findOne({ where: { care_recipient_id: id } });

  if (!user) {
    return res.status(400).json({
      error: "No user with that id!"
    });
  }

  const token = jwt.sign({ id: user.care_recipient_id }, config.jwtSecret, {
    expiresIn: "1y"
  });

  return res.json({ token });
});
