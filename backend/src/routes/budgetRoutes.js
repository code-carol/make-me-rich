const express = require("express");
const budgetController = require("../controllers/budgetsController");
const router = express.Router();

router.post("/", budgetController.createBudget);

module.exports = router;
