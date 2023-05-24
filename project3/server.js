//jshint esversion:6

const express = require("express");
const app = express();


//home route
app.get("/",(req,res)=>{
    res.send("<h1>Hello, welcome!</h1>");
})

//contact route

app.get("/contact",(req,res)=>{
    res.send("Contact me at : ann@gmail.com");
})

//about route

app.get("/about",(req,res) =>{
    res.send("Hello! Myself, Ann! Nice to meet you!");
})

//port
app.listen(3000,()=>{
    console.log("Server running on port 3000!");
})