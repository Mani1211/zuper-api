const mongoose = require("mongoose");

module.exports = () => {
	const mongodbUri = process.env.MONGODB_URL;

	mongoose.connect(mongodbUri, {});

	mongoose.connection.on("connected", () => {
		console.log("Connected to mongo instance");
	});

	mongoose.connection.on("error", (err) => {
		console.error("Error connecting to mngo", err);
	});
};
