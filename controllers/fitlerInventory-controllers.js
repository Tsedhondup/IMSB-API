const knex = require("knex")(require("../knexfile"));

const findGenre = () => {};
const filterInventory = (req, res) => {
  // CREATE AN ARRAY OF KEY-VALUES PAIRS FROM QUERY OBJECT e.g. [['author', 'Jane Austen']]
  const queryEntries = Object.entries(req.query);
  knex("inventory")
    /*
     * queryEntries[0][0] = key
     * queryEntries[0][1] = value
     */

    .where(queryEntries[0][0], "regexp", `\\b${queryEntries[0][1]}\\b`)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Books: ${err}`));
};

module.exports = {
  filterInventory,
};
