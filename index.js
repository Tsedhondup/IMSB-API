const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const inventoryRoutes = require("./routes/inventory-routes");
const filterInventoryRoutes = require("./routes/filterInventory-routes");
// ROUTES
app.use("/inventories", inventoryRoutes);
app.use("/filterInventories", filterInventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
