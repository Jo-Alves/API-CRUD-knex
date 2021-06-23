const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'jodev',
      password : 'abc123',
      database : 'db_crud'
    }
  });

  module.exports = knex