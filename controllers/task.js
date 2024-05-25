import db from "../db/models/index.js";

const Task = db.task;

export async function getTasks(req, res) {
  await Task.findAll().then((data) => res.send(data));
}

export async function createTask(req, res) {
  const task = {
    name: req.body.task.name,
  };

  await Task.create(task).then((data) => {
    res.send(data);
  });
}

export async function deleteTask(req, res) {
  const id = req.params.id;
  await Task.destroy({ where: { id: id } }).then((num) => {
    if (num == 1) {
      res.send({ message: "Deleted" });
    }
  });
}
