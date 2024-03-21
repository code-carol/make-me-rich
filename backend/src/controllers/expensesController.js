const Expense = require("../models/expenseModel");

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    if (expenses.length === 0) {
      res.status(404).json({
        message: "No expenses found.",
        GetAllExpenses: expenses,
      });
    } else {
      res.status(200).json({
        message: "All expenses fetched successfully.",
        GetAllExpenses: expenses,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetAllExpenses: error,
    });
  }
};

const createExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const savedExpense = await expense.save();
    res.status(201).json({
      message: "Expense created successfully.",
      CreateExpense: savedExpense,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      CreateExpense: error,
    });
  }
};

const getExpense = async (req, res) => {
  const id = req.params.id;
  try {
    const expense = await Expense.findById(id);
    if (!expense) {
      res.status(404).json({
        message: "No expense found.",
        GetExpense: expense,
      });
    } else {
      res.status(200).json({
        message: "Expense fetched successfully.",
        GetExpense: expense,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetExpense: error,
    });
  }
};

const updateExpense = async (req, res) => {
  const id = req.params.id;
  try {
    const expense = await Expense.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!expense) {
      res.status(404).json({
        message: "Expense not found.",
        UpdatedExpense: expense,
      });
    } else {
      res.status(200).json({
        message: "Expense updated successfully.",
        UpdatedExpense: expense,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      UpdateExpense: error,
    });
  }
};

const deleteExpense = async (req, res) => {
  const id = req.params.id;
  try {
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) {
      res.status(404).json({
        message: "Expense not found.",
        DeletedExpense: expense,
      });
    } else {
      res.status(200).json({
        message: "Expense deleted successfully.",
        DeletedExpense: expense,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      DeleteExpense: error,
    });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
};
