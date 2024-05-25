import Sequelize, { DataTypes, Model } from "sequelize";

import dbConfig from "../../infra/database.js";
import task from "./task.js";

const env = process.env.NODE_ENV || "development";

const { database, username, password } = dbConfig[env];

const sequelize = new Sequelize(database, username, password, dbConfig[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.task = task(Model, sequelize, DataTypes);

export default db;
