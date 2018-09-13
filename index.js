const express = require('express');

const app = express();
require('./routes/appRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
