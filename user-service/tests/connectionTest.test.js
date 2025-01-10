import User from '../src/models/User';

describe('User Service Tests', () => {
   test('should connect to the database', async () => {
    await User.query().insert({
        name: 'test',
        email: 'test@test.com',
        password: 'test'
    });

    const users = await User.query().where('email', 'test@test.com');
    expect(users).toHaveLength(1);
    expect(users[0].name).toBe('test');
    expect(users[0].email).toBe('test@test.com');
    expect(users[0].password).toBe('test');
   });
});
