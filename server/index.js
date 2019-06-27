const express = require('express');
const app = express();

//Route handler for root
app.get('/', (req,res) => {
    res.send({bye:'buddy'});
});

//Port setup for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// var express = require("express");
// var app = express();
// var port = 3000;
// var ip = '127.0.0.1';

// app.set("view engine","ejs");

// app.get("/",function(req,res){
//     var publications = [
//         {title: "Machine Learning", author: "David"},
//         {title: "Artificial Intelligence", author: "Tom"},
//         {title: "Algorithm", author: "Lucas"}
//     ]
//     res.render("home",{publications:publications});
// });

// app.get("/publication",function(req,res){
//     res.render("publication");
// });

// app.get("/login",function(req,res){
//     res.render("login");
// });

// app.get("/register",function(req,res){
//     res.render("register");
// });

// app.get("/profile",function(req,res){
//     res.render("profile");
// });

// app.listen(port,ip,function(){
//     console.log("Program server has started!");
// });