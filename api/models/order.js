const mongoose 	= require('mongoose');

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},

	name: {
		type: String, 
		required: true
	},

	phonenumber: {
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

	order_date: {
		type: Date,
		default: Date.now()
	},

	status: {
		type: String,
		default: 'Ready for payment'
	},

	totalPrice: Number,

	coupon: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Coupon'
	},

	items: [{
		products: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
		},
		quantity: Number
	}],

	payment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Payment'
	},

	shipping_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shipment'
	}
});

module.exports = mongoose.model('Order', orderSchema);