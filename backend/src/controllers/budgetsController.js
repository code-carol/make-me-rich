const Budget = require("../models/budgetModel");

const createBudget = (req, res) => {
  const budget = new Budget(req.body);
  budget.save().then((savedBudget) => {
    res
      .status(201)
      .json({
        message: "Budget created successfully.",
        CreateBudget: savedBudget,
      })
      .catch((error) => {
        res.status(500).json({
          message: "Your budget could not be created. Please try again later.",
          CreateError: error,
        });
      });
  });
};

const getAllBudgets = (req, res) => {
  Budget.find((budgets, error) => {
    if (budgets) {
      res.status(200).json({
        message: "All budgets fetched successfully.",
        GetAllBudgets: budgets,
      });
    } else if (budgets.length === 0) {
      res.status(404).json({
        message: "No budgets found.",
        GetAllBudgets: budgets,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetAllBudgets: error,
      });
    }
  });
};

const getBudgetById = (req, res) => {
  const id = req.params.id;
  Budget.findById(id, (budget, error) => {
    if (budget) {
      res.status(200).json({
        message: "Budget found successfully.",
        GetBudgetById: budget,
      });
    } else if (!budget) {
      res.status(404).json({
        message: "Budget not found.",
        GetBudgetById: budget,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetBudgetById: error,
      });
    }
  });
};

const updateBudget = (req, res) => {
  const id = req.params.id;
  Budget.findByIdAndUpdate(id, req.body, { new: true }, (budget, error) => {
    if (budget) {
      res.status(200).json({
        message: "Budget updated successfully.",
        UpdateBudget: budget,
      });
    } else if (!budget) {
      res.status(404).json({
        message: "Budget not found.",
        UpdateBudget: budget,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        UpdateBudget: error,
      });
    }
  });
};

module.exports = { createBudget, getAllBudgets, getBudgetById, updateBudget };
