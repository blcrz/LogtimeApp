const ProjectDAO = require('../dao/projectDAO')

class Project {

    projectsByUser = async (req, res) => {
        try {
            const idUser = req.params.id
            const result = await ProjectDAO.selectProjectsByUser(idUser)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new Project()