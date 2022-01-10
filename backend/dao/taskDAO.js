const connection = require('../infra/connection')
const UserDAO = require('./userDAO')

class TaskDAO {

    constructor () {
        this.connection = connection
    }

    selectTasksByProjectId = (idProject) => {
        return new Promise((resolve, reject) => {
            this.connection.query(`
                select t.* from tasks t
                inner join projects_tasks pt
                on pt.idTask = t.id
                where pt.idProject = ?
                group by id, subject, startDate, endDate, status, idUser
                `, idProject, async (error, result) => {
                if (error) {
                    reject('Cannot load tasks.')
                } else {
                    const tasks = result

                    for(const task of tasks) {
                        task.assignee = await UserDAO.selectUserById(task.idUser)
                    }

                    resolve(result)
                }
            })
        })
    }

    selectTasksByUserId = (idUser) => {
        return new Promise((resolve, reject) => {
            this.connection.query(`
                select * from tasks where idUser = ?
                `, idUser, async (error, result) => {
                if (error) {
                    reject('Cannot load tasks.')
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new TaskDAO()