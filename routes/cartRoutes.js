const express = require("express");
const Cart = require("../models/cart");

const router = express.Router();

router.get("/cart", async (req, res) => {
	try {
		const cart = await Cart.find();
		console.log("product", cart);
		res.status(200).json({ cart });
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.post("/cart/:productId", async (req, res) => {
	try {
		const cart = await Cart.create(req.body);
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.delete("/cart/:productId", async (req, res) => {
	try {
		let product_id = req.params.productId;

		const cart = await Cart.findOneAndDelete({ product_id });
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

router.get("/cart/:id", async (req, res) => {
	try {
		const id = req.params.id;
		console.log("id", id);
		const cart = await Cart.findOne({ _id: id });
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).send("Something went wromg", error);
	}
});

module.exports = router;
