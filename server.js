const express = require("express");
const database = require("./infra/database.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/tasks", (request, response) => {
  response.json({ response: "OK!" });
});

app.post("/api/tasks/new", (request, response) => {
  console.log(request.body);
  response.send({
    message: `Content that was sent via post: ${request.body.task}`,
  });
});

app.listen(8000, () => {
  console.log("Server running at - http://localhost:8000");
});
