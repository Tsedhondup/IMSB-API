const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const inventoryRoutes = require("./routes/inventory-routes");
// basic home route
app.use("/inventory", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
