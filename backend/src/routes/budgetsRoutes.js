const express = require("express");
const budgetsController = require("../controllers/budgetsController");
const router = express.Router();

router.post("/", budgetsController.createBudget);
router.get("/", budgetsController.getAllBudgets);
router.get("/:id", budgetsController.getBudgetById);
router.patch("/:id", budgetsController.updateBudget);
router.delete("/:id", budgetsController.deleteBudget);

module.exports = router;
