import * as express from "express";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize("birdietest", "test-read", "xnxPp6QfZbCYkY8", {
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com:3306",
  dialect: "mysql"
});

sequelize.addModels([__dirname + "/models/*.model.ts"]);

const app = express();

export default app;
