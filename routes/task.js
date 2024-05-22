module.exports = (app) => {
  const tasks = require("../controllers/task.js");

  var router = require("express").Router();

  router.get("/", tasks.findAll);
  router.post("/new", tasks.create);
  router.delete("/:id", tasks.delete);

  app.use("/api/tasks", router);
};
