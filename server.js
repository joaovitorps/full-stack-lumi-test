import db from "./db/models/index.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

try {
  db.sequelize
    .authenticate()
    .then(
      app.listen(PORT, console.log("Server running at - http://localhost:8000"))
    );
} catch (error) {
  console.log(error);
}
