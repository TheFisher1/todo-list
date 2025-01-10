import 'dotenv/config';

export const development = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations'
  }
}; 

export const test = {
  client: 'postgresql',
  connection: process.env.TEST_DATABASE_URL,
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations'
  }
};
