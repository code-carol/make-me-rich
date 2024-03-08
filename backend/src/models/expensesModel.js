const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us the name of the expense!']
    },
    date: {
        type: Date,
        required: [true, 'Please provide the date of the expense!']
    },
    amount: {
        type: Number,
        required: [true, 'Please provide the amount of the expense!']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Expense must belong to a user!']
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Expense must belong to a category!']
    },
    paymentType: {
        type: mongoose.Schema.ObjectId,
        ref: 'PaymentType',
        required: [true, 'Expense must belong to a payment type!']
    }
});

const Expense = mongoose.model('Expense', expensesSchema);

module.exports = Expense;