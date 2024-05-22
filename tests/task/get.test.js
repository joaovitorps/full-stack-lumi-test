const database = require("../../db/models/index");
const request = require("supertest");
const app = require("../../app");

beforeAll(async () => {
  await database.sequelize.authenticate();
});

afterAll(async () => {
  await database.sequelize.close();
});

test("it should return all tasks", async () => {
  const response = await request(app).get("/api/tasks");
  expect(response.status).toBe(200);
  expect(response.body).toEqual(expect.any(Array));
  expect(response.body).toEqual(
    expect.arrayContaining([expect.objectNotContaining({ name: null })])
  );
});

// test("return an array of tasks", async () => {
//   const response = await fetch("http://localhost:8000/api/tasks");
//   expect(response.status).toBe(200);
//   const responseBody = await response.json();
//   console.log(typeof responseBody);
//   expect(typeof responseBody[0]).toBe([]);
// });
