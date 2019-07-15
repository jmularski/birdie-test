import { Router, Request, Response, NextFunction } from "express";
import { UserNotFound } from "../errors/auth.error";
import TokenMiddleware from "../middleware/token.middleware";
import Event from "../models/event.model";

export const statisticsController = Router();
statisticsController.all("/*", TokenMiddleware);

statisticsController.get(
  "/mood",
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      const events_payload = await Event.findAll({
        where: { care_recipient_id: res.locals.jwtToken.id },
        attributes: ["payload_as_text"],
        order: [["timestamp", "DESC"]]
      });

      let events: { mood?: string; timestamp: string }[] = [];

      events_payload.forEach(payload => {
        events.push(JSON.parse(payload.payload_as_text));
      });

      let moods = events.map(event => ({
        mood: event.mood,
        timestamp: event.timestamp
      }));

      moods = moods.filter(mood => mood.mood);

      res.json({ moods });
    } catch (e) {
      next(new UserNotFound());
    }
  }
);

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
