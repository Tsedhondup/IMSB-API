const router = require("express").Router();
const filterInventoryController = require("../controllers/fitlerInventory-controllers");

router.route("/").get(filterInventoryController.filterInventory);
module.exports = router;
