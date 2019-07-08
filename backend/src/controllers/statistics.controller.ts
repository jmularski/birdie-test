import { Router, Request, Response, NextFunction } from "express";
import { UserNotFound } from "../errors/auth.error";
import TokenMiddleware from "../middleware/token.middleware";
import Event from "../models/event.model";

export const statisticsController = Router();
statisticsController.all("/*", TokenMiddleware);

statisticsController.get(
  "/history",
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      const events = await Event.findAll({
        where: { care_recipient_id: res.locals.jwtToken.id },
        attributes: ["event_type", "timestamp"],
        order: [["timestamp", "DESC"]]
      });
      res.json({ events });
    } catch (e) {
      next(new UserNotFound());
    }
  }
);
