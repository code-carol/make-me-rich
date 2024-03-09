const express = require('express');
const app = express();
const expensesRoutes = require('./routes/expensesRoutes');


app.use('/', expensesRoutes);

module.exports = app;

