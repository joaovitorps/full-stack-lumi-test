const { Sequelize, QueryTypes, DataTypes } = require("sequelize");
const task = require("../db/models/task");

const dbConfig = {
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
  dialect: "postgres",
};

const { host, database, password, username, dialect } = dbConfig;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

// const Task = sequelize.define("tasks", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: "compositeIndex",
//   },
// });

(async () => {
  await sequelize.sync({ force: true });

  // const tasks = await sequelize.query("SELECT * FROM tasks", {
  //   type: QueryTypes.SELECT,
  // });

  // console.log(tasks);
  console.log(sequelize.models);

  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    sequelize.close();
  }
})();

module.exports = {
  development: {
    ...dbConfig,
  },
  test: {
    ...dbConfig,
  },
  production: {
    ...dbConfig,
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
  },
};
