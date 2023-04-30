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
  res.sendFile(__dirname, "../index.html");
  console.log(y);
});
app.post("/a", (req, res) => {
  console.log(req.body.r);
  arr.add(req.body.r);
  console.log(arr);
});
app.post("/cart", (req, res) => {
  let y = [...arr];
  console.log(req.body.r);
  res.send(y);
});
app.listen(port, () => {
  console.log("running 8000");
});
