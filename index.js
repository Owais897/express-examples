var express = require("express");
var app = express();

var things = require("./things.js");

app.use(function (req, res, next) {
  console.log("A new request received at " + Date.now());

  //This function call is very important. It tells that more processing is
  //required for the current request and is in the next middleware
  // function/route handler
  next();
}, things);
//both index.js and things.js should be in same directory
// app.use("/", things);

app.listen(3000);
