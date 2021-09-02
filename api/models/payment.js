const mongoose 	= require('mongoose');

const paymentSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Payment', paymentSchema);