const express = require("express");

const TaskRoutes = require("./routes/task");

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ server_running: true });
});

app.use("/api/tasks", TaskRoutes);

module.exports = app;
