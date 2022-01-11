# <h1>Desenvolvimento Logtime</h1>
  
  
  ## Instruções da API:
  
  URL Base: https://topi-logtime.herokuapp.com/
  
  #### POST /logtime
    body:
    {
      "type": "default",
      "logdate": "2022-01-05",
      "startTime": "11:29:00",
      "endTime": "12:00:00" ,
      "description": "creating endpoint",
      "idUser": 11231,
      "idTask": 1
    }
    
    response: 
    {
      "msg": "Logtime successfully registered"
    }
    
 #### GET /users
    response: 
    [
      {
        "id": 11231,
        "username": "usernameOne",
        "profile": "EMPLOYEE"
      },
      {
        "id": 11232,
        "username": "usernameTwo",
        "profile": "EMPLOYEE"
      }
    ]
    
 #### GET /projects-by-user/:id
    response: 
    [
      {
        "id": 1,
        "projectKey": "TMS-WEB-APP",
        "name": "Timesheet Web APP",
        "startDate": "2022-01-01T03:00:00.000Z",
        "endDate": "2022-03-31T03:00:00.000Z",
        "status": "Open",
        "tasks": [
          {
            "total_time": "04:30:00",
            "description": "Implementing new tasks.",
            "type": "overtime",
            "subject": "Manage Project",
            "idUser": 11231,
            "assignee": [
              {
                "id": 11231,
                "username": "usernameOne",
                "profile": "EMPLOYEE"
              }
            ]
          },
          {
            "total_time": "01:00:00",
            "description": "Implemeting login screen.",
            "type": "compensatory",
            "subject": "Create APP Front End",
            "idUser": 11231,
            "assignee": [
              {
                "id": 11231,
                "username": "usernameOne",
                "profile": "EMPLOYEE"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "projectKey": "TMS-ANDROID-APP",
        "name": "Timesheet Android APP",
        "startDate": "2022-04-01T03:00:00.000Z",
        "endDate": "2022-07-31T03:00:00.000Z",
        "status": "Open",
        "tasks": [
          {
            "total_time": "01:10:00",
            "description": "Creating components.",
            "type": "default",
            "subject": "Create UI",
            "idUser": 11231,
            "assignee": [
              {
                "id": 11231,
                "username": "usernameOne",
                "profile": "EMPLOYEE"
              }
            ]
          },
          {
            "total_time": "02:00:00",
            "description": "Creating endpoints.",
            "type": "compensatory",
            "subject": "Create BackEnd",
            "idUser": 11231,
            "assignee": [
              {
                "id": 11231,
                "username": "usernameOne",
                "profile": "EMPLOYEE"
              }
            ]
          }
        ]
      }
    ] 
    
#### GET tasks/:id
    response: 
    [
      {
        "id": 10,
        "subject": "Create UI",
        "startDate": "2022-01-01T00:00:00.000Z",
        "endDate": "2022-02-28T00:00:00.000Z",
        "status": "Open",
        "idUser": 11232
      },
      {
        "id": 11,
        "subject": "Create BackEnd",
        "startDate": "2022-02-01T00:00:00.000Z",
        "endDate": "2022-03-31T00:00:00.000Z",
        "status": "Open",
        "idUser": 11232
      },
      {
        "id": 12,
        "subject": "Create UI Tests",
        "startDate": "2022-03-01T00:00:00.000Z",
        "endDate": "2022-04-30T00:00:00.000Z",
        "status": "Open",
        "idUser": 11232
      },
      {
        "id": 13,
        "subject": "Create BackEnd Tests",
        "startDate": "2022-03-01T00:00:00.000Z",
        "endDate": "2022-05-31T00:00:00.000Z",
        "status": "Open",
        "idUser": 11232
      }
    ]
    
# As tecnologias utilizadas foram:
  * Vue.js
  * Vuetify
  * CSS
  * Axios
  * MySQL
  * Node.js
  * Git
  
# Deploys:
  * Frontend: [Vercel](https://topi-logtime.vercel.app)
  * Backend: [API-HEROKU](https://topi-logtime.herokuapp.com)
  * Banco de Dados: ClearDB

# Desenvolvedora responsável:
* [Bárbara Luiza Cruz](https://www.linkedin.com/in/b%C3%A1rbara-cruz-228552199/)
