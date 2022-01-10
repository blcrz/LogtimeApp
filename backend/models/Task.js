const TaskDAO = require('../dao/taskDAO')

class Task {

    tasksByUserId = async (req, res) => {
        try {
            const idUser = req.params.id
            const result = await TaskDAO.selectTasksByUserId(idUser)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new Task()