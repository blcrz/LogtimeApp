const UserDAO = require('../dao/userDAO')

class User {

    getUsers = async (req, res) => {
        try {
            const result = await UserDAO.selectAll()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new User()