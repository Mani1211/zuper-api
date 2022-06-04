const express = require("express");
const Review = require("../models/review");
const Product = require("../models/product");

const router = express.Router();
router.get("/review", async (req, res) => {
	try {
		const review = await Review.find();
		console.log("product", review);
		res.status(200).json({ review });
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.post("/review/:productId", async (req, res) => {
	try {
		const review = await Review.create(req.body);
		const pro = await Product.findOneAndUpdate(
			{ _id: req.params.productId },
			{ $push: { reviews: review._id } },
			{ new: true },
		);
		res.status(200).json(pro);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/review/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const review = await Review.findOneAndDelete({ _id: id });
		res.status(200).json(review);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.get("/review/:id", async (req, res) => {
	try {
		const id = req.params.id;
		console.log("id", id);
		const review = await Review.findOne({ _id: id });
		res.status(200).json(review);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

module.exports = router;
