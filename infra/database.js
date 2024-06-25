import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

const dbConfig = {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  pool: {
    max: 1,
    min: 0,
    idle: 10000,
  },
};

export default {
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
