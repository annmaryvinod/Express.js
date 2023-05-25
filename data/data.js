// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let name = req.body.fname + " " + req.body.lname;
  let city = req.body.city;
  let email = req.body.email;

  let result =
    "Hi, I am " + name + " from " + city + ". Contact me at " + email + ".";

  res.send(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
