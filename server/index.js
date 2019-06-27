const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//create GoogleStrategy instance
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile token', profile);
    })
);

//get for /auth/google
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

//get for /auth/google/callback 
app.get(
    '/auth/google/callback',
    passport.authenticate('google')
);

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