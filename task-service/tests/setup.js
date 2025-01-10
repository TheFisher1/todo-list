import knex from 'knex';
import testConfig from '../src/db/knexfile.js';
import { Model } from 'objection';

export async function setupTestDb() {
  const db = knex(testConfig);
  Model.knex(db);  
  return db;
}

export async function teardownTestDb(db) {
  await db.migrate.rollback(true);
  await db.destroy();
} 