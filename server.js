const express = require("express");
const database = require("./db/models/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  database.sequelize.authenticate().then(() => console.log("done"));
  database.sequelize
    .sync()
    .then(() => console.log("Synced"))
    .catch((err) => console.log(err));
} catch (error) {
} finally {
  // database.sequelize.close();
}

require("./routes/task")(app);

app.listen(8000, () => {
  console.log("Server running at - http://localhost:8000");
});
