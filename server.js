const database = require("./db/models/index");

const app = require("./app");
const PORT = process.env.PORT || 8000;

try {
  database.sequelize
    .authenticate()
    .then(
      app.listen(PORT, console.log("Server running at - http://localhost:8000"))
    );
} catch (error) {
  console.log(error);
}
