const mongoose 	= require('mongoose');

const couponSchema = new mongoose.Schema({
	code: {
		type: String,
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

module.exports = mongoose.model('Coupon', couponSchema);