const express = require("express");
const budgetController = require("../controllers/budgetsController");
const router = express.Router();

router.post("/", budgetController.createBudget);
router.get("/", budgetController.getAllBudgets);
router.get("/:id", budgetController.getBudgetById);
router.patch("/:id", budgetController.updateBudget);
router.delete("/:id", budgetController.deleteBudget);

module.exports = router;
