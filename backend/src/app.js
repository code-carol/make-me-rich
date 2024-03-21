const express = require("express");
const app = express();
const expensesRoutes = require("./routes/expensesRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");

app.use(express.json());
app.use("/expenses", expensesRoutes);
app.use("/budget", budgetRoutes);
app.use("/category", categoriesRoutes);

module.exports = app;
