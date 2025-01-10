import { knexSnakeCaseMappers } from 'objection';
import 'dotenv/config';

const development = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations_tasks'
  },
  ...knexSnakeCaseMappers()
};

const test = {
  client: 'postgresql',
  connection: {
    host: process.env.TEST_DB_HOST,
    user: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations_tasks'
  },
  ...knexSnakeCaseMappers()
};

export {
  development,
  test
}; 