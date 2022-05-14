// console.log("Hello");

const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/route");
const dbConnection = require("./configDB/dbConnection");
const app = express();

const port = process.env.PORT;

// use json support middleware
app.use(express.json());
// use formdata(req.body) support middleware
app.use(express.urlencoded({ extended: false }));

//use route middleware
app.use("/api/user", router);

dbConnection();
app.listen(port, () => {
  console.log("server is succesfully running on port 5000");
});
