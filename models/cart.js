const mongoose = require("mongoose");
const Product = require("./product");

const cartSchema = new mongoose.Schema({
	product_id: {
		type: mongoose.Schema.ObjectId,
		ref: Product,
		required: true,
		index: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("cart", cartSchema);
