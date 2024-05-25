import express from "express";

import { getTasks, createTask, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/new", createTask);
router.delete("/:id", deleteTask);

export default router;
