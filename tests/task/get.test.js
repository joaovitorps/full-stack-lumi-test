import db from "../../db/models/index.js";

beforeAll(async () => {
  await db.sequelize.authenticate();
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("GET on /api/tasks", () => {
  test("it should return 200", async () => {
    const response = await fetch("http://localhost:8000/api/tasks");
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(responseBody)).toBe(true);
  });
});
