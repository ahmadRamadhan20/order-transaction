const { Schema, model } = require('mongoose')

const shipmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    shipment_status: {
        type: String,
        default: 'In Tangerang Selatan'
    }
});

module.exports = model('Shipment', shipmentSchema);