require("dotenv").config({
  path: ".env.development",
});

const dbConfig = {
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
  dialect: "postgres",
  pool: {
    max: 1,
    min: 0,
    idle: 10000,
  },
};

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
