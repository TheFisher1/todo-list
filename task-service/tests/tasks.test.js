import { setupTestDb, teardownTestDb } from './setup.js';
import { Task } from '../src/models/Task.js';

describe('Task Integration Tests', () => {
  let db;

  beforeAll(async () => {
    db = await setupTestDb();
    Task.knex(db);
  });

  afterAll(async () => {
    await teardownTestDb(db);
  });

  beforeEach(async () => {
    await Task.query().delete();
  });

  it('should create a task', async () => {
    const task = await Task.query().insert({
      title: 'Test Task',
      description: 'Test Description',
      userId: 1,
      status: 'pending'
    });

    expect(task.title).toBe('Test Task');
    expect(task.status).toBe('pending');
  });
}); 