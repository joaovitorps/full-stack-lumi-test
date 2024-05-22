const db = require("../db/models");
const Task = db.task;

exports.findAll = async (req, res) => {
  Task.findAll().then((data) => res.send(data));
};

exports.create = async (req, res) => {
  const task = {
    name: req.body.task.name,
  };

  await Task.create(task).then((data) => {
    res.send(data);
  });
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  await Task.destroy({ where: { id: id } }).then((num) => {
    if (num == 1) {
      res.send({ message: "Deleted" });
    }
  });
};
