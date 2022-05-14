console.log("Hello");

const express = require("express");
const dotenv = require("dotenv").config();
const dbConnection = require("./configDB/dbConnection");
const app = express();

const port = process.env.PORT;
dbConnection();
app.listen(port, () => {
  console.log("server is succesfully running on port 5000");
});
