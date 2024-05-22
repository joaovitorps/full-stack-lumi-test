const express = require("express");

const { getTasks, createTask, deleteTask } = require("../controllers/task.js");

const router = express.Router();

router.get("/", getTasks);
router.post("/new", createTask);
router.delete("/:id", deleteTask);

module.exports = router;
