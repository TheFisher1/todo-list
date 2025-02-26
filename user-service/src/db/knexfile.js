import 'dotenv/config';

export const development = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  tableName: 'knex_migrations',
  migrations: {
    directory: './migrations'
  }
}; 

export const test = {
  client: 'postgresql',
  connection: {
    host: process.env.TEST_DB_HOST,
    user: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME
  },
  migrations: {
    directory: './migrations',
  },
  tableName: 'knex_migrations'
};
