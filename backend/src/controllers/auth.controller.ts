import { Router, Request, Response, NextFunction } from "express";
import { UserNotFound } from "../errors/auth.error";
import { ValidationError } from "../errors/validation.error";
import Event from "../models/event.model";
import { createToken } from "../helpers/token.helper";

export const authController = Router();

authController.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.body;

    if (!id) {
      next(new ValidationError("id"));
    }

    // naming this variable user cause I need to make all the other requests by some param
    const user = await Event.findOne({ where: { care_recipient_id: id } });

    if (user) {
      const token = createToken(user.care_recipient_id);
      res.json({ token });
    } else {
      next(new UserNotFound());
    }
  }
);
