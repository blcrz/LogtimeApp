const connection = require('../infra/connection')
const TaskDAO = require('./taskDAO')

class ProjectDAO {

    constructor () {
        this.connection = connection
    }

    selectProjectsByUser = (idUser) => {
        return new Promise((resolve, reject) => {
            this.connection.query(`select p.* from projects p
            inner join projects_tasks pt
            on pt.idProject = p.id
            inner join tasks t
            on t.id = pt.idTask
            where t.idUser = ?
            group by id, projectKey, startDate, endDate, status`, idUser, async (error, result) => {
                if (error) {
                    reject('Cannot load projects.')
                } else {
                    const projects = result

                    for(const project of projects) {
                        project.tasks = await TaskDAO.selectTasksByProjectId(project.id)
                    }

                    resolve(projects)
                }
            })
        })
    }
}

module.exports = new ProjectDAO()