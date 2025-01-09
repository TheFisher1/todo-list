export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('name');
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
} 