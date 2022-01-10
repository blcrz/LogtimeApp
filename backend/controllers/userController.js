const User = require('../models/User')

module.exports = app => {
    app.get('/users', (req,res) => {
        User.getUsers(req, res)
    })
}