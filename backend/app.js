const express = require("express");
const fs = require("fs");

const app = express();
// app.use(express.static());
var bodyParser = require("body-parser");
const cors = require("cors");
let port = process.env.PORT || 8000;
//const { json } = require("express");
//const { stringify } = require("querystring");
//const { hasSubscribers } = require("diagnostics_channel");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "../")));
const arr = new Set();
const nodemailer = require("nodemailer");
app.get("/", (req, res) => {
  console.log("sandeep", arr);
  console.log(y);
  arr.clear();
  arr = [];
  console.log("sandeep", arr);
  res.sendFile(__dirname, "../loading.htm;");
});
app.post("/delete", (req, res) => {
  console.log("sandeep", arr);
  arr.clear();

  console.log("sandeep", arr);
  console.log("emptycart");
});
app.post("/a", (req, res) => {
  console.log(req.body.r);
  arr.add(req.body.r);
  console.log(arr);
});
app.post("/cart", (req, res) => {
  let y = [...arr];

  res.send(y);
});
app.listen(port, () => {
  console.log("running 8000");
});
