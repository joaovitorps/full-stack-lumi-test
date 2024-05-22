const database = require("./db/models/index");

const app = require("./app");
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", index.html));
  });
}

try {
  database.sequelize
    .authenticate()
    .then(
      app.listen(PORT, console.log("Server running at - http://localhost:8000"))
    );
} catch (error) {
  console.log(error);
}
