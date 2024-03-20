const express = require("express");
const budgetController = require("../controllers/budgetsController");
const router = express.Router();

router.post("/", budgetController.createBudget);
router.get("/", budgetController.getAllBudgets);

module.exports = router;
