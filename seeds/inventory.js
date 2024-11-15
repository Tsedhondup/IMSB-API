/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const inventoryData = require("../seed_data/inventory_data");
exports.seed = function (knex) {
  return knex("inventory")
    .del()
    .then(function () {
      return knex("inventory").insert(inventoryData);
    });
};
