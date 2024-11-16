const router = require("express").Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.inventory);
router.route("/").post(inventoryController.addBook);

module.exports = router;
