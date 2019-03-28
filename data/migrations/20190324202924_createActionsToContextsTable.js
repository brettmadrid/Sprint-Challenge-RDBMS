
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions_to_contexts", tbl => {
    tbl.integer("action_id");
    tbl
      .foreign("action_id")
      .references("id")
      .on("actions");

    tbl.integer("context_id");
    tbl
      .foreign("context_id")
      .references("id")
      .on("contexts");
    tbl.primary(["action_id", "context_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions_to_contexts');
};
