const mongoose 	= require('mongoose');

const productSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Product', productSchema);