const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.MONGO_URI);


const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['jflasjb3873pajs']
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());


require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
