const Expense = require("../models/expensesModel");

const getAllExpenses = (req, res) => {
  Expense.find((error, expenses) => {
    if (expenses) {
      res.status(200).json({
        message: "All expenses fetched successfully.",
        GetAllExpenses: expenses,
      });
    } else if (expenses.length === 0) {
      res.status(404).json({
        message: "No expenses found.",
        GetAllExpenses: expenses,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetAllExpenses: error,
      });
    }
  });
};

const createExpense = (req, res) => {
  console.log(`Request body: ${req.body}`);
  const expense = new Expense(req.body);
  expense
    .save()
    .then((savedExpense) => {
      res.status(201).json({
        message: "Expense created successfully.",
        CreateExpense: savedExpense,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        CreateExpense: error,
      });
    });
};

const getExpense = (req, res) => {
  const id = req.params.id;
  Expense.findById(id, (error, expense) => {
    if (expense) {
      res.status(200).json({
        message: "Expense fetched successfully.",
        GetExpense: expense,
      });
    } else if (expense.length === 0) {
      res.status(404).json({
        message: "No expense found.",
        GetExpense: expense,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetExpense: error,
      });
    }
  });
};

const updateExpense = (req, res) => {
  const id = req.params.id;
  Expense.findByIdAndUpdate(id, req.body, { new: true }, (error, expense) => {
    if (expense) {
      res.status(200).json({
        message: "Expense updated successfully.",
        UpdatedExpense: expense,
      });
    } else if (!expense) {
      res.status(404).json({
        message: "Expense not found.",
        UpdatedExpense: expense,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        UpdateExpense: error,
      });
    }
  });
};

const deleteExpense = (req, res) => {
  const id = req.params.id;
  Expense.findByIdAndDelete(id, (error, expense) => {
    if (expense) {
      res.status(200).json({
        message: "Expense deleted successfully.",
        DeletedExpense: expense,
      });
    } else if (!expense) {
      res.status(404).json({
        message: "Expense not found.",
        DeleteExpense: expense,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        DeleteExpense: error,
      });
    }
  });
};

module.exports = {
  getAllExpenses,
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
};
