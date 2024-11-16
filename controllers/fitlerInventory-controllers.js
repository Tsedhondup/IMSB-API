const knex = require("knex")(require("../knexfile"));

const filterInventory = (req, res) => {
  // CREATE AN ARRAY CONTAINING ALL THE KEYS FROM QUERY OBJECTS e.g. ['author']
  const queryKeys = Object.keys(req.query);
  // CREATE AN ARRAY OF KEY-VALUES PAIRS FROM QUERY OBJECT e.g. [['author', 'Jane Austen']]
  const queryEntries = Object.entries(req.query);
  knex("inventory")
    /*
     * queryKeys[0]) = name of the key from query object
     * queryEntries[0][1] = value of key from query object
     */
    .where(String(queryKeys[0]), queryEntries[0][1])
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Books: ${err}`));
};

module.exports = {
  filterInventory,
};
