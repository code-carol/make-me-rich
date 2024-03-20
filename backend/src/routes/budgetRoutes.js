const express = require("express");
const budgetController = require("../controllers/budgetsController");
const router = express.Router();

router.post("/", budgetController.createBudget);
router.get("/", budgetController.getAllBudgets);
router.get("/:id", budgetController.getBudgetById);

module.exports = router;
