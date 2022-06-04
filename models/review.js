const mongoose = require("mongoose");
const Product = require("./product");

const reviewSchema = new mongoose.Schema({
	stars: {
		type: Number,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("review", reviewSchema);
