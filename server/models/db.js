const mysql = require('mysql')

const dbConfig = {
    // host: "us-cdbr-east-06.cleardb.net",
    // user: 'b30b56011598e2',
    // password: '99e660e7',
    // database: 'heroku_fe9867ba8770e95'

    host: "localhost",
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'petshop'
}

let db = mysql.createConnection(dbConfig)

db.on('error', (e) => handleDisconnection)

function handleDisconnection (e) {
    if (e.code === 'PROTOCOL_CONNECTION_LOST') {
        db = mysql.createConnection(dbConfig)
    }
}

module.exports = db