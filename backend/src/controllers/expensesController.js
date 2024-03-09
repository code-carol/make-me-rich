const Expense = require("../models/expensesModel");

exports.getAllExpenses = (req, res) => {
  res.status(200).send("Hello from the server side");
};
