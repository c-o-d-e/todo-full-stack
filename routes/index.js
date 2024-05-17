var express = require("express");
const mongoose = require("mongoose");
const db = require("../locked/credentials");
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

module.exports = router;
