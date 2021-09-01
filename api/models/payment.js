const { Schema, model } = require('mongoose')

const paymentSchema = new Schema({
    bank: {
        type: String,
        required: true
    },

    account_number: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }
});

module.exports = model('Payment', paymentSchema);