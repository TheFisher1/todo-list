import User from '../src/models/User.js';
import { setupTestDb } from './setup.js';

describe('User Service Tests', () => {
    let db;

    beforeAll(async () => {
        db = await setupTestDb();
    });

    afterAll(async () => {
        await teardownTestDb(db);
    });

   test('should connect to the database', async () => {
    await User.query().insert({
        name: 'test',
        email: 'test@test.com',
        password: 'testTest'
    });

    const users = await User.query().where('email', 'test@test.com');
    expect(users).toHaveLength(1);
    expect(users[0].name).toBe('test');
    expect(users[0].email).toBe('test@test.com');
    expect(users[0].password).toBe('testTest');
   });
});
