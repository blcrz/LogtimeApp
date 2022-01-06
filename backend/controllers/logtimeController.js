const Logtime = require('../models/Logtime')

module.exports = app => {
    app.post('/logtime', (req,res) => {
        Logtime.create(req.body, res)
    })
}