const Task = require('../models/Task')

module.exports = app => {
    app.get('/tasks/:id', (req,res) => {
        Task.tasksByUserId(req, res)
    })
}