import "jest";
import data from "../../__helpers__/data.helper";
import * as request from "supertest";
import app from "../../src/application";

describe("Auth integration tests", () => {
  test("Should get 200 and token with existing code", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ id: data.id });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
  test("Should get  with nonexisting code", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ id: "test" });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("error");
  });
  test("Should get without code", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ id: "" });

    expect(response.status).toBe(406);
    expect(response.body).toHaveProperty("error");
  });
});
