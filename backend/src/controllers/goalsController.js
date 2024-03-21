const Goal = require("../models/goalModel");

const createGoal = async (req, res) => {
  try {
    const goal = new Goal(req.body);
    const savedGoal = await goal.save();
    res.status(201).json({
      message: "Goal created successfully.",
      CreateGoal: savedGoal,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      CreateGoal: error,
    });
  }
};

const getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    if (goals.length === 0) {
      res.status(404).json({
        message: "No goals found.",
        GetAllGoals: goals,
      });
    } else {
      res.status(200).json({
        message: "All goals fetched successfully.",
        GetAllGoals: goals,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetAllGoals: error,
    });
  }
};

const getGoalById = async (req, res) => {
  const id = req.params.id;
  try {
    const goal = await Goal.findById(id);
    if (!goal) {
      res.status(404).json({
        message: "Goal not found.",
        GetGoalById: goal,
      });
    } else {
      res.status(200).json({
        message: "Goal fetched successfully.",
        GetGoalById: goal,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetGoalById: error,
    });
  }
};

const updateGoalById = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedGoal) {
      res.status(404).json({
        message: "Goal not found.",
        UpdateGoal: updatedGoal,
      });
    } else {
      res.status(200).json({
        message: "Goal updated successfully.",
        UpdateGoal: updatedGoal,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      UpdateGoal: error,
    });
  }
};

const deleteGoalById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    if (!deletedGoal) {
      res.status(404).json({
        message: "Goal not found.",
        DeleteGoal: deletedGoal,
      });
    } else {
      res.status(200).json({
        message: "Goal deleted successfully.",
        DeleteGoal: deletedGoal,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      DeleteGoal: error,
    });
  }
};

module.exports = {
  createGoal,
  getAllGoals,
  getGoalById,
  updateGoalById,
  deleteGoalById,
};
