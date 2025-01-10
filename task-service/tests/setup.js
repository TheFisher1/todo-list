import knex from 'knex';
import { test as testConfig } from '../src/db/knexfile.js';
import { Model } from 'objection';

export async function setupTestDb() {
  const db = knex(testConfig);
  Model.knex(db);  
  return db;
}