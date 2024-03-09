const express = require("express");
const expenseController = require("./../controllers/expensesController");
const router = express.Router();

router.get("/", expenseController.getAllExpenses);

module.exports = router;
