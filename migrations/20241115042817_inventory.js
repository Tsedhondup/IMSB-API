/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// CREATE TABLE
exports.up = function (knex) {
  return knex.schema.createTable("inventory", (table) => {
    table.increments("entry_id").primary();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("genre").notNullable();
    table.string("publication_date").notNullable();
    table.integer("isbn");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// DROP TABLE
exports.down = function (knex) {
  return knex.schema.dropTable("inventory");
};
