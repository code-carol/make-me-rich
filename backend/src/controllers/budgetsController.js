const Budget = require("../models/budgetModel");

const createBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    const savedBudget = await budget.save();
    res.status(201).json({
      message: "Budget created successfully.",
      CreateBudget: savedBudget,
    });
  } catch (error) {
    res.status(500).json({
      message: "Your budget could not be created. Please try again later.",
      CreateError: error,
    });
  }
};

const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    if (budgets.length === 0) {
      res.status(404).json({
        message: "No budgets found.",
        GetAllBudgets: budgets,
      });
    } else {
      res.status(200).json({
        message: "All budgets fetched successfully.",
        GetAllBudgets: budgets,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetAllBudgets: error,
    });
  }
};

const getBudgetById = async (req, res) => {
  const id = req.params.id;
  try {
    const budget = await Budget.findById(id);
    if (!budget) {
      res.status(404).json({
        message: "Budget not found.",
        GetBudgetById: budget,
      });
    } else {
      res.status(200).json({
        message: "Budget found successfully.",
        GetBudgetById: budget,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetBudgetById: error,
    });
  }
};

const updateBudget = async (req, res) => {
  const id = req.params.id;
  try {
    const budget = await Budget.findByIdAndUpdate(id, req.body, { new: true });
    if (!budget) {
      res.status(404).json({
        message: "Budget not found.",
        UpdateBudget: budget,
      });
    } else {
      res.status(200).json({
        message: "Budget updated successfully.",
        UpdateBudget: budget,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      UpdateBudget: error,
    });
  }
};

const deleteBudget = async (req, res) => {
  const id = req.params.id;
  try {
    const budget = await Budget.findByIdAndDelete(id);
    if (!budget) {
      res.status(404).json({
        message: "Budget not found.",
        DeleteBudget: budget,
      });
    } else {
      res.status(200).json({
        message: "Budget deleted successfully.",
        DeleteBudget: budget,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      DeleteBudget: error,
    });
  }
};

module.exports = {
  createBudget,
  getAllBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};