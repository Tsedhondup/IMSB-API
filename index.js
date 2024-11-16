const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

// 'dotenv'
require("dotenv").config();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
const PORT = process.env.PORT || 5050;
const inventoryRoutes = require("./routes/inventory-routes");
const filterInventoryRoutes = require("./routes/filterInventory-routes");
// ROUTES
app.use("/inventories", inventoryRoutes);
app.use("/filterInventories", filterInventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
