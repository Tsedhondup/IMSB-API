const knex = require("knex")(require("../knexfile"));

const inventory = (_req, res) => {
  knex("inventory")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Books: ${err}`));
};

module.exports = {
  inventory,
};
