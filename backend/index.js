const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const Tables = require('./infra/tables')

connection.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('successfully connected')

        Tables.init(connection)
        const app = customExpress()

        app.listen(process.env.PORT || 3001, () => console.log('server running'))
    }
})