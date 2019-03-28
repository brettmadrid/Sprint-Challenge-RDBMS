
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', tbl => {
    tbl.increments();
    tbl.string('context_description').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');
};