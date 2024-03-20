const express = require("express");
const app = express();
const expensesRoutes = require("./routes/expensesRoutes");
const budgetRoutes = require("./routes/budgetRoutes");

app.use(express.json());
app.use("/expenses", expensesRoutes);
app.use("/budget", budgetRoutes);

module.exports = app;
