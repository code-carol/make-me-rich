const express = require("express");
const app = express();
const expensesRoutes = require("./routes/expensesRoutes");
const budgetsRoutes = require("./routes/budgetsRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const goalsRoutes = require("./routes/goalsRoutes");
const paymentsRoutes = require("./routes/paymentsRoutes");

app.use(express.json());
app.use("/expenses", expensesRoutes);
app.use("/budget", budgetsRoutes);
app.use("/category", categoriesRoutes);
app.use("/goal", goalsRoutes);
app.use("/payment", paymentsRoutes);


module.exports = app;
