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
            'PRIMARY KEY (id)'+
        '); ',

        'CREATE TABLE IF NOT EXISTS tasks'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'subject varchar(200) NOT NULL, '+
            'startDate date NOT NULL, '+
            'endDate date NOT NULL, '+
            'status varchar(20) NOT NULL, '+
            'idUser int NOT NULL, ' +
            'PRIMARY KEY (id), '+
            'CONSTRAINT FK_tasks_users FOREIGN KEY (idUser) ' +
            'REFERENCES users(id)' +
          ');',

        'CREATE TABLE IF NOT EXISTS logtime'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'type varchar(200) NOT NULL, '+
            'logdate date NOT NULL, '+
            'startTime time NOT NULL, '+
            'endTime time NOT NULL, '+
            'description varchar(200), ' +
            'idUser int NOT NULL, ' +
            'idTask int NOT NULL, ' +
            'PRIMARY KEY (id), '+
            'CONSTRAINT FK_logtime_users FOREIGN KEY (idUser) ' +
            'REFERENCES users(id), ' +
            'CONSTRAINT FK_logtime_tasks FOREIGN KEY (idTask) ' +
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
        ');',

        'INSERT INTO users' +
        '(id, username, profile, isOvertimeAllowed, isCompensatoryTimeAllowed) values' +
        '(11231, \'usernameOne\', \'EMPLOYEE\', 1, 0), ' +
        '(11232, \'usernameTwo\', \'EMPLOYEE\', 1, 1); ',

        'INSERT INTO tasks' +
        '(id, subject, startDate, endDate, status, idUser) values ' +
        '(1, \'Manage Project\', \'2022-01-01\', \'2022-03-31\', \'Open\', 11231), ' +
        '(2, \'Create APP Front End\', \'2022-01-01\', \'2022-01-20\', \'Open\', 11231), ' +
        '(3, \'Create APP BackEnd\', \'2022-01-01\', \'2022-01-30\', \'Open\', 11231), ' +
        '(4, \'Create APP Front End Tests\', \'2022-02-01\', \'2022-03-31\', \'Open\', 11231), ' +
        '(5, \'Create APP BackEnd Tests\', \'2022-02-01\', \'2022-03-31\', \'Open\', 11231), ' +
        '(6, \'Create UI\', \'2022-04-01\', \'2022-06-30\', \'Open\', 11231), ' +
        '(7, \'Create BackEnd\', \'2022-04-01\', \'2022-06-30\', \'Open\', 11231), ' +
        '(8, \'Create UI Tests\', \'2022-06-01\', \'2022-07-31\', \'Open\', 11231), ' +
        '(9, \'Create BackEnd Tests\', \'2022-06-01\', \'2022-07-31\', \'Open\', 11231), ' +
        '(10, \'Create UI\', \'2022-01-01\', \'2022-02-28\', \'Open\', 11232), ' +
        '(11, \'Create BackEnd\', \'2022-02-01\', \'2022-03-31\', \'Open\', 11232), ' +
        '(12, \'Create UI Tests\', \'2022-03-01\', \'2022-04-30\', \'Open\', 11232), ' +
        '(13, \'Create BackEnd Tests\', \'2022-03-01\', \'2022-05-31\', \'Open\', 11232);',

        'INSERT INTO projects' +
        '(id, projectKey, name, startDate, endDate, status) values ' +
        '(1, \'TMS-WEB-APP\', \'Timesheet Web APP\', \'2022-01-01\', \'2022-03-31\', \'Open\'), ' +
        '(2, \'TMS-ANDROID-APP\', \'Timesheet Android APP\', \'2022-04-01\', \'2022-07-31\', \'Open\'), ' +
        '(3, \'TTMS-IOS-APP\', \'Timesheet IO APP\', \'2022-01-01\', \'2022-05-31\', \'Open\'); ',

        'INSERT INTO projects_tasks' +
        '(idProject, idTask) values' +
        '(1, 1), (1, 2), (1,3), (1, 4), (1, 5), ' +
        '(2, 6), (2, 7), (2, 8), (2, 9), ' +
        '(3, 10), (3, 11), (3, 12), (3, 13);'
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