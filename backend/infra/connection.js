const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'ba6f70d78bcd83',
    password: '99b99ffd',
    database: 'heroku_c6f7beb8dde02ce'
})

module.exports = connection