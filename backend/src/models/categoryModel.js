const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please tell us the category!']
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;