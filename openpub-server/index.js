const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const connectDB = require('./config/db')
require('./models/User');
require('./services/passport');

connectDB();
const app = express();

//cookieSession 30 days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//Port setup for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);

