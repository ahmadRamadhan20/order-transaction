const mongoose 	= require('mongoose');

const shipmentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},

	order: {
		type: mongoose.Schema.Types.ObjectId,
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
		default: 'In Warehouse'
	}

});

module.exports = mongoose.model('Shipment', shipmentSchema);