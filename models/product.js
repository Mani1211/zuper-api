const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
});

module.exports = mongoose.model("product", productSchema);
