const connection = require('../infra/connection')

class UserDAO {

    constructor () {
        this.connection = connection
    }

    selectUserById = (id) => {
        return new Promise((resolve, reject) => {
            this.connection.query('select id, username, profile from users where id = ?', id, (error, result) => {
                if (error) {
                    reject('Cannot load user.')
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new UserDAO()