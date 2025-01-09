import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from './knexfile';

console.log('Database URL:', process.env.DATABASE_URL);

const knex = Knex({
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  log: {
    warn(message) {
      console.log('Database Warning:', message);
    },
    error(message) {
      console.log('Database Error:', message);
    },
    deprecate(message) {
      console.log('Database Deprecation:', message);
    },
    debug(message) {
      console.log('Database Debug:', message);
    }
  }
});

// Test the connection
knex.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.log('Database connection failed:', err);
  });

Model.knex(knex);

export default knex; 