const express = require("express");

const TaskRoutes = require("./routes/task");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", index.html));
  });
}

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ server_running: true });
});

app.use("/api/tasks", TaskRoutes);

module.exports = app;
