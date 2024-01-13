// importing required packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const dotenv = require("dotenv");

// initializing express
const app = express();

// using dotenv to use environment variables
dotenv.config();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// using routes
app.get("/", function (req, res) {
  res.send("Welcome to E-Commerce API");
});
app.use("/products", require("./routes/products"));

// starting the server
const port = process.env.PORT || 7000;
app.listen(port, function () {
  console.log(`Server is up and running on port ${port}`);
});
