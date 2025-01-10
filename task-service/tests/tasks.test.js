import { setupTestDb, teardownTestDb } from './setup.js';
import { knex, Task } from '../src/models/Task.js';

describe('Task Integration Tests', () => {
  let db;

  beforeAll(async () => {
    db = await setupTestDb();
    knex(db);
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

  it('should update task status', async () => {
    const task = await Task.query().insert({
      title: 'Test Task',
      userId: 1,
      status: 'pending'
    });

    const updated = await Task.query()
      .patchAndFetchById(task.id, { status: 'completed' });

    expect(updated.status).toBe('completed');
  });
}); 