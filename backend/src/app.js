const express = require("express");
const app = express();
const expensesRoutes = require("./routes/expensesRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const goalsRoutes = require("./routes/goalsRoutes");

app.use(express.json());
app.use("/expenses", expensesRoutes);
app.use("/budget", budgetRoutes);
app.use("/category", categoriesRoutes);
app.use("/goal", goalsRoutes);

module.exports = app;
