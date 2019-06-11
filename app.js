var express = require("express");
var app = express();
var port = 3000;
var ip = '127.0.0.1';

app.set("view engine","ejs");

app.get("/",function(req,res){
    var publications = [
        {title: "Machine Learning", author: "David"},
        {title: "Artificial Intelligence", author: "Tom"},
        {title: "Algorithm", author: "Lucas"}
    ]
    res.render("home",{publications:publications});
});

app.get("/publication",function(req,res){
    res.render("publication");
});


app.listen(port,ip,function(){
    console.log("Program server has started!");
});