const Goal = require("../models/goalModel");

const createGoal = (req, res) => {
  const goal = new Goal(req.body);
  goal
    .save()
    .then((savedGoal) => {
      res.status(201).json({
        message: "Goal created successfully.",
        CreateGoal: savedGoal,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        CreateGoal: error,
      });
    });
};

const getAllGoals = (req, res) => {
  Goal.find((error, goals) => {
    if (goals) {
      res.status(200).json({
        message: "All goals fetched successfully.",
        GetAllGoals: goals,
      });
    } else if (goals.length === 0) {
      res.status(404).json({
        message: "No goals found.",
        GetAllGoals: goals,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetAllGoals: error,
      });
    }
  });
};

const getGoalById = (req, res) => {
  const id = req.params.id;
  Goal.findById(id, (error, goal) => {
    if (goal) {
      res.status(200).json({
        message: "Goal fetched successfully.",
        GetGoalById: goal,
      });
    } else if (!goal) {
      res.status(404).json({
        message: "Goal not found.",
        GetGoalById: goal,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetGoalById: error,
      });
    }
  });
};

const updateGoalById = (req, res) => {
  const id = req.params.id;
  Goal.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, updatedGoal) => {
      if (updatedGoal) {
        res.status(200).json({
          message: "Goal updated successfully.",
          UpdateGoal: updatedGoal,
        });
      } else if (!updatedGoal) {
        res.status(404).json({
          message: "Goal not found.",
          UpdateGoal: updatedGoal,
        });
      } else {
        res.status(500).json({
          message: "Something went wrong. Please try again later.",
          UpdateGoal: error,
        });
      }
    }
  );
};

const deleteGoalById = (req, res) => {
  const id = req.params.id;
  Goal.findByIdAndDelete(id, (error, deletedGoal) => {
    if (deletedGoal) {
      res.status(200).json({
        message: "Goal deleted successfully.",
        DeleteGoal: deletedGoal,
      });
    } else if (!deletedGoal) {
      res.status(404).json({
        message: "Goal not found.",
        DeleteGoal: deletedGoal,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        DeleteGoal: error,
      });
    }
  });
};

module.exports = {
  createGoal,
  getAllGoals,
  getGoalById,
  updateGoalById,
  deleteGoalById,
};
