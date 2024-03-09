const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us the name of the goal!"],
  },
  amount: {
    type: Number,
    required: [true, "Please provide the amount of the goal!"],
  },
  targetAmount: {
    type: Number,
    required: [true, "Please provide the target amount of the goal!"],
  },
  targetDate: {
    type: Date,
    required: [true, "Please provide the date of the goal!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Goal must belong to a user!"],
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
