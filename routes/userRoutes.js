const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
    app.post('/api/save/', async (req, res) => {
        if(req.user.savedRecipes.indexOf(req.body.id) != -1)
            req.user.savedRecipes.splice(req.user.savedRecipes.indexOf(req.body.id), 1);
        else
            req.user.savedRecipes.push(req.body.id);

        const user = await req.user.save();
        console.log(user);
        res.send(user);
    })
}
