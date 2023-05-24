//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");  //to require the body-parser package
app.use(bodyParser.urlencoded({extended: true}));  //to use body-parser in getting form data we use the urlencoded method and the rest of the code is needed

//root route
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");   //here, __dirname specifies the directory path within the system or cloud no matter in which system/location it is present
//this will send the index.html page as the response to the root route. Remember to use sendFile()

})

// handling post request
app.post("/",(req,res)=>{

    let n1 = Number(req.body.num1);  //if we do not use Number method the returned values are text and therefore the result will be a concatenated value
    let n2 = Number(req.body.num2);  // here num1 and num2 are the "name" attribute values that are accessed in the post request

    let result = n1 + n2;


    res.send("Result of calculation is : " + result);
})

//port
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})