
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'csy',
    password: '123456',
    database: 'democ'
})

module.exports = pool
