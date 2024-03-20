const Budget = require("../models/budgetModel");

const createBudget = (req, res) => {
  const budget = new Budget(req.body);
  budget.save().then((savedBudget) => {
    res
      .status(201)
      .json({
        message: "Budget created successfully.",
        budget: savedBudget,
      })
      .catch((error) => {
        res.status(500).json({
          message: "Your budget could not be created. Please try again later.",
          error: error,
        });
      });
  });
};

const getAllBudgets = (req, res) => {
  Budget.find((budgets, error) => {
    if (budgets) {
      res.status(200).json({
        message: "All budgets fetched successfully.",
        budgets: budgets,
      });
    } else if (budgets.length === 0) {
      res.status(404).json({
        message: "No budgets found.",
        budgets: budgets,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        error: error,
      });
    }
  });
};

module.exports = { createBudget, getAllBudgets };
