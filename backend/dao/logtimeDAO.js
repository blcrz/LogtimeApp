const connection = require('../infra/connection')

class LogtimeDAO {

    constructor () {
        this.connection = connection
    }

    insert = (logtime) => {
        return new Promise((resolve, reject) => {
            const {
                type,
                logdate,
                startTime,
                endTime,
                description,
                idUser,
                idTask
            } = logtime

            this.connection.query(`INSERT INTO  logtime (type, logdate, startTime, endTime, description, idUser, idTask) VALUES (?, ?, ?, ?, ?, ?, ?)`, [ type, logdate, startTime, endTime, description, idUser, idTask ],
                (error, result) => {
                    if (error) {
                        reject('Error: ' + error)
                    } else {
                        resolve('Logtime successfully registered')
                    }
                })
        })
    }
}

module.exports = new LogtimeDAO()