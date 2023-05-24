//jshint esversion:6

const express = require("express"); //requiring express
const app = express(); 
app.listen(3000,()=>{console.log("Server running on port 3000")}); //specifying the port number


//Run this and go to localhost:3000
// An error is thrown : "Cannot GET/"
// This means we could not get the reponse from the home route(/)
// To get over this look at project2