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

module.exports = {createBudget}
