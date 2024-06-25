import express from "express";
import path from "path";

import TaskRoutes from "./routes/task.js";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.status(200).json({ server_running: true });
});

app.use("/api/tasks", TaskRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = import.meta.dirname;

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

export default app;
