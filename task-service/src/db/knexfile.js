const development = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'todo_list',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'todo_list'
  },
  migrations: {
    directory: './migrations'
  }
};

const test = {
  client: 'pg',
  connection: {
    host: process.env.TEST_DB_HOST || 'localhost',
    user: process.env.TEST_DB_USER || 'test_user',
    password: process.env.TEST_DB_PASSWORD || 'test_password',
    database: process.env.TEST_DB_NAME || 'test_todo_list'
  },
  migrations: {
    directory: './migrations'
  }
};

module.exports = {
  development,
  test
}; 