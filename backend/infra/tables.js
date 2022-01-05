class Tables {
    init(connection) {
        this.connection = connection
        this.createTables()
    }

    createTables() {

        const tables = ['CREATE TABLE IF NOT EXISTS users' +
        '( ' +
            'id int NOT NULL AUTO_INCREMENT, ' +
            'username varchar(50) NOT NULL, ' +
            'profile varchar(50) NOT NULL, ' +
            'isOvertimeAllowed bit NOT NULL, ' +
            'isCompensatoryTimeAllowed bit NOT NULL, ' +
            'PRIMARY KEY (id)' +
        '); ',

        'CREATE TABLE IF NOT EXISTS projects' +
        ' ( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'projectKey varchar(50) NOT NULL, '+
            'name varchar(200) NOT NULL,' +
            'startDate date NOT NULL, '+
            'endDate date NOT NULL, ' +
            'status varchar(50) NOT NULL, ' +
            'tasks varchar(50) NOT NULL, ' +
            'PRIMARY KEY (id)'+
        '); ',

        'CREATE TABLE IF NOT EXISTS tasks'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'subject varchar(200) NOT NULL, '+
            'startDate date NOT NULL, '+
            'endDate date NOT NULL, '+
            'status varchar(20) NOT NULL, '+
            'PRIMARY KEY (id)'+
          ');',

        'CREATE TABLE IF NOT EXISTS users_tasks'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'idUser int NOT NULL, '+
            'idTask int NOT NULL, '+
            'PRIMARY KEY (id), '+
            'CONSTRAINT FK_users_tasks_users FOREIGN KEY (idUser)' +
            'REFERENCES users(id),' +
            'CONSTRAINT FK_users_tasks_tasks FOREIGN KEY (idTask)' +
            'REFERENCES tasks(id)' +
          ');',

          'CREATE TABLE IF NOT EXISTS projects_tasks'+
          '( '+
          'id int NOT NULL AUTO_INCREMENT, '+
          'idProject int NOT NULL, '+
          'idTask int NOT NULL, '+
          'PRIMARY KEY (id), '+
          'CONSTRAINT FK_projects_tasks_projects FOREIGN KEY (idProject)' +
          'REFERENCES projects(id),' +
          'CONSTRAINT FK_projects_tasks_tasks FOREIGN KEY (idTask)' +
          'REFERENCES tasks(id)' +
        ');'
        ]

        tables.forEach(sql =>{
            this.connection.query(sql, (erro) => {
                if(erro){
                    console.log(erro)
                } else {
                    console.log('Table created successfully')
                }
            })
        })

    }
}


module.exports = new Tables