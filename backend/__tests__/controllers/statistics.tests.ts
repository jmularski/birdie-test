import "jest";
import data from "../../__helpers__/data.helper";
import * as request from "supertest";
import app from "../../src/application";
import { createToken } from "../../src/helpers/token.helper";

jest.setTimeout(20000);

describe("Statistics tests", () => {
  describe("get moods", () => {
    test("returns 200 and list of moods", async () => {
      const token = createToken(data.id);
      const response = await request(app)
        .get("/stats/mood")
        .set("authorization", token);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("moods");
    });
    test("returns 401 when token is wrong", async () => {
      const response = await request(app)
        .get("/stats/mood")
        .set("authorization", "test");

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("error");
    });
    test("returns 406 and error when token is missing", async () => {
      const response = await request(app).get("/stats/mood");

      expect(response.status).toBe(406);
      expect(response.body).toHaveProperty("error");
    });
  });
  describe("get history", () => {
    test("returns 200 and list of events", async () => {
      const token = createToken(data.id);
      const response = await request(app)
        .get("/stats/history")
        .set("authorization", token);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("events");
    });
    test("returns 401 when token is wrong", async () => {
      const response = await request(app)
        .get("/stats/history")
        .set("authorization", "test");

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("error");
    });
    test("returns 406 and error when token is missing", async () => {
      const response = await request(app).get("/stats/history");

      expect(response.status).toBe(406);
      expect(response.body).toHaveProperty("error");
    });
  });
});
