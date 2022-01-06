const Project = require('../models/Project')

module.exports = app => {
    app.get('/projects-by-user/:id', (req,res) => {
        Project.projectsByUser(req, res)
    })
}