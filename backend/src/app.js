const express = require("express");
const app = express();
const routes = [
  { path: "/expenses", router: require("./routes/expensesRoutes") },
  { path: "/budget", router: require("./routes/budgetsRoutes") },
  { path: "/category", router: require("./routes/categoriesRoutes") },
  { path: "/goal", router: require("./routes/goalsRoutes") },
  { path: "/payment", router: require("./routes/paymentsRoutes") },
];

app.use(express.json());

routes.forEach((route) => {
  app.use(route.path, route.router);
});

module.exports = app;
