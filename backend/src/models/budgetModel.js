const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us the name of the budget!']
    },
    amount: {
        type: Number,
        required: [true, 'Please provide the amount of the budget!']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Budget must belong to a user!']
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Budget must belong to a category!']
    }
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;