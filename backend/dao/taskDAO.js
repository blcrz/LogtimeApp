const connection = require('../infra/connection')
const UserDAO = require('./userDAO')

class TaskDAO {

    constructor () {
        this.connection = connection
    }

    selectTasksByProjectId = (idProject) => {
        return new Promise((resolve, reject) => {
            this.connection.query(`
                select timediff(l.endTime, l.startTime) as total_time,
                l.description, l.type, t.subject, t.idUser
                from logtime l
                inner join
                tasks t
                on t.id = l.idTask
                inner join projects_tasks pt
                on pt.idTask = t.id
                where pt.idProject = ?
                group by l.description, l.type, t.subject, t.idUser, total_time;
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