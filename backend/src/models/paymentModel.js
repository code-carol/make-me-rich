const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Please tell us the type of the payment!']
    },
});

const Payment = mongoose.model('Payment', paymentSchema);

exports.Payment = Payment;