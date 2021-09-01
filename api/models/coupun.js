const { Schema, model } = require('mongoose')

const coupunSchema = new Schema({
    code: {
        type: string,
        required: true,
        uppercase: true
    },

    percentage_discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },

    quantity: {
        type: Number,
        required: true
    },

    start_valid: {
        type: Date,
        required: true
    },

    end_valid: {
        type: Date,
        required: true
    }
});

module.exports = model('Coupon', coupunSchema);