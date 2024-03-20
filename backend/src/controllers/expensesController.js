const Expense = require("../models/expensesModel");

const getAllExpenses = (req, res) => {
  Expense.find((error, expenses) => {
    if (error) {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetAllExpenses: error,
      });
    } else {
      res.status(200).json({
        message: "All expenses fetched successfully.",
        GetAllExpenses: expenses,
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
    if (error) {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetExpense: error
      });
    } else {
      res.status(200).json({
        message: "Expense fetched successfully.",
        GetExpense: expense
      });
    }
  });
};

const updateExpense = (req, res) => {
  const id = req.params.id;
  Expense.findByIdAndUpdate(id, req.body, { new: true }, (error, expense) => {
    if (error) {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        UpdateExpense: error
      });
    } else {
      res.status(200).json({
        message: "Expense updated successfully.",
        UpdatedExpense: expense
      });
    }
  });
};

const deleteExpense = (req, res) => {
  const id = req.params.id;
  Expense.findByIdAndDelete(id, (error, expense) => {
    if (error) {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        DeleteExpense: error
      });
    } else {
      res.status(200).json({
        message: "Expense deleted successfully.",
        DeletedExpense: expense
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
