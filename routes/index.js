var express = require("express");
const mongoose = require("mongoose");
const db = require("../locked/credentials");
const Product = require("../models/product.model");
var router = express.Router();

// mongodb connection using mongoose
mongoose
    .connect(
        `mongodb+srv://${db.MONGODB_USERNAME}:${db.MONGODB_PASSWORD}@node-api.u2wujs2.mongodb.net/?retryWrites=true&w=majority&appName=node-api`
    )
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Connection failed!"));

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.use(express.json());

/* POST DB */
router.post("/api/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* GET api products */
router.get("/api/product", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* GET api product based on id*/
router.get("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
