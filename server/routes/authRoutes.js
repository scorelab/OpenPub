const passport = require('passport');

module.exports = app => {

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

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};