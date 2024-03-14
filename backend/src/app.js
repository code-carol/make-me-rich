const express = require("express");
const app = express();
const expensesRoutes = require("./routes/expensesRoutes");

app.use(express.json());
app.use("/expenses", expensesRoutes);

module.exports = app;
