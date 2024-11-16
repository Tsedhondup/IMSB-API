const knex = require("knex")(require("../knexfile"));

const inventory = (_req, res) => {
  knex("inventory")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Books: ${err}`));
};
const addBook = (req, res) => {
  knex("inventory")
    .insert(req.body)
    .then((result) => {
      return knex("inventory").where({ entry_id: result[0] });
    })
    .then((newBook) => {
      res.status(201).json(newBook);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to add new book" });
    });
};
module.exports = {
  inventory,
  addBook,
};
