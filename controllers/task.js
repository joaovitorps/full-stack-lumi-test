const db = require("../db/models");
const Task = db.task;

exports.getTasks = async (req, res) => {
  await Task.findAll().then((data) => res.send(data));
};

exports.createTask = async (req, res) => {
  const task = {
    name: req.body.task.name,
  };

  await Task.create(task).then((data) => {
    res.send(data);
  });
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  await Task.destroy({ where: { id: id } }).then((num) => {
    if (num == 1) {
      res.send({ message: "Deleted" });
    }
  });
};
