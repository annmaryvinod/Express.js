// jshint esverion:6


const express = require("express");
const app = express();

//To get around the issue with not GETting response from server:

app.get("/",(req, res)=> {
  res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
