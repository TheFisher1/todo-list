import { Model } from 'objection';
import Knex from 'knex';
import 'dotenv/config';

const knex = Knex({
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  }
});

Model.knex(knex);

export default knex; 