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

        const port = process.env.PORT || 3001

        app.listen(port, () => console.log('server running'))
    }
})