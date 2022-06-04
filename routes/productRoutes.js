const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.get("/products", async (req, res) => {
	try {
		const products = await Product.find().populate("reviews");
		console.log("product", products);

		res.status(200).json({ products });
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.post("/products", async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.delete("/products/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const review = await Product.findOneAndDelete({ _id: id });
		res.status(200).json(review);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.get("/products/:id", async (req, res) => {
	try {
		const id = req.params.id;
		console.log("id", id);
		const product = await Product.findOne({ _id: id }).populate("reviews");
		res.status(200).json(product);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

module.exports = router;
