const dbConfig = {
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
  dialect: "postgres",
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
