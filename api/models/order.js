const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    name: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    order_data: {
        type: Data,
        default: Date.now()
    },

    status: {
        type: String,
        default: 'Ready for payment'
    },

    totalPrice: Number,

    coupun: {
        type: Schema.Types.ObjectId,
        ref: 'Coupun'
    },

    items: [{
        products: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number
    }],

    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    },

    shipping_id: {
        type: Schema.Types.ObjectId,
        ref: 'Shipment'
    }
});

module.exports = model('Order', orderSchema);