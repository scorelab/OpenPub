var express = require("express");
var app = express();
var port = 3000;
var ip = '127.0.0.1';

app.get("/",function(req,res){
    res.send("This will be the landing page");
});

app.listen(port,ip,function(){
    console.log("Program server has started!");
});