const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us the name of the expense!"],
  },
  date: {
    type: Date,
    required: [true, "Please provide the date of the expense!"],
  },
  amount: {
    type: Number,
    required: [true, "Please provide the amount of the expense!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
  paymentType: {
    type: mongoose.Schema.ObjectId,
    ref: "PaymentType",
  },
});

const Expense = mongoose.model("Expense", expensesSchema);
console.log(expensesSchema);
module.exports = Expense;
