require("dotenv").config();
require("./config/database")();
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");
const app = express();
const ProductRoutes = require("./routes/productRoutes");
const CartRoutes = require("./routes/cartRoutes");
const ReviewRoutes = require("./routes/reviewRoutes");
app.use(express.json());

app.use(helmet());
app.use(compression());

app.get("/", (req, res) => {
	res.send("<h1>Hello Zuper</h1>");
});

app.use("/api", ProductRoutes);
app.use("/api", CartRoutes);
app.use("/api", CartRoutes);
app.use("/api", ReviewRoutes);
module.exports = app;
