import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite",
    connection: {
      filename: "./db/app.db",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations",
      extension: "ts",
    },
  },

  test: {
    client: "sqlite",
    connection: {
      filename: "./db/test.db",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations",
      extension: "ts",
    },
  },
};

export default config;