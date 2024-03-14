const express = require("express");
const expenseController = require("./../controllers/expensesController");
const router = express.Router();

router.get("/", expenseController.getAllExpenses);
router.post("/", expenseController.createExpense);
router.get("/:id", expenseController.getExpense);
router.patch("/:id", expenseController.updateExpense);

module.exports = router;
