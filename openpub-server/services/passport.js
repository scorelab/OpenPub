const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

require('dotenv').config()


passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

//create GoogleStrategy instance
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        proxy:true,
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId:profile.id })
            .then((existingUser) => {
                console.log(existingUser)
                if(existingUser){
                    done(null,existingUser);
                }else{
                    new User({  googleId:profile.id,
                                username:profile.displayName,
                                profilepicture:profile._json.picture,
                                email: profile._json.email
                             })
                        .save()
                        .then(user => done(null,user));

                }
            })
 
    })
);