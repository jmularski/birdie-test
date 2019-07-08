import "reflect-metadata";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";

import { Sequelize } from "sequelize-typescript";
import { authController } from "./controllers/auth.controller";
import { statisticsController } from "./controllers/statistics.controller";
import errorMiddleware from "./middleware/error.middleware";

const sequelize = new Sequelize("birdietest", "test-read", "xnxPp6QfZbCYkY8", {
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  dialect: "mysql"
});

sequelize.addModels([__dirname + "/models/*.model.ts"]);

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(errorMiddleware);

app.use("/auth", authController);
app.use("/stats", statisticsController);

export default app;
