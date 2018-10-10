const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => done(null, user));
})

passport.use(new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret : keys.GOOGLE_CLIENT_SECRET,
        callbackURL : '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existing_user = await User.findOne({googleID : profile.id});

        if(existing_user){
            return done(null, existing_user);
        }

        const new_user = await new User({
            googleID: profile.id,
            name: profile.name.givenName,
            savedRecipes: []
        }).save();

        return done(null, new_user);
    })
);