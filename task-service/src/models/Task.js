const { Model } = require('objection');

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'userId'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1 },
        description: { type: 'string' },
        completed: { type: 'boolean', default: false },
        userId: { type: 'integer' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    const User = require('./User');
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Task; 