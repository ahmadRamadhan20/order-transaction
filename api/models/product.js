const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    prod_id: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true
    }
});

module.exports = model('Product', productSchema);