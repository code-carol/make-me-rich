const Expense = require("../models/expensesModel");

const getAllExpenses = (req, res) => {
  Expense.find((error, expenses) => {
    if (error) {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
      });
    } else {
      res.status(200).json({
        message: "All expenses fetched successfully.",
        expenses,
      });
    }
  });
};

const createExpense = (req, res) => {
  console.log(`Request body: ${req.body}`);
  const expense = new Expense(req.body);
  console.log(`Expense: ${expense}`);
  expense
    .save()
    .then((savedExpense) => {
      res.status(201).json({
        message: "Expense created successfully.",
        expense: savedExpense,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        expense: error,
      });
    });
};

const getExpense = (req, res) => {
  const id = req.params.id;
  Expense.findById(id, (error, expense) => {
    if (error) {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Expense fetched successfully.",
        expense,
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
      });
    } else {
      res.status(200).json({
        message: "Expense updated successfully.",
        expense,
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
      });
    } else {
      res.status(200).json({
        message: "Expense deleted successfully.",
        expense,
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
