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

    //get for /api/logout
    app.get('/api/logout',(req,res) => {
        req.logout();
        res.send(req.user);
    });

    //get for /api/current_user
    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};