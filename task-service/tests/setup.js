import knex from 'knex';
import { test as testConfig } from '../src/db/knexfile.js';

export async function setupTestDb() {
  const db = knex(testConfig);
  
  await db.migrate.latest();
  
  return db;
}

export async function teardownTestDb(db) {
  await db.migrate.rollback(true);
  await db.destroy();
} 