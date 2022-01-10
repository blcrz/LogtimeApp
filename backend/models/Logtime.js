const LogtimeDAO = require('../dao/logtimeDAO')

class Logtime {

    create = async (logtime, res) => {
        try {
            const result = await LogtimeDAO.insert(logtime)
            res.status(201).json({ msg: result })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new Logtime()