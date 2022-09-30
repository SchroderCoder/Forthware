const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'natdev',
    password: 'root',
    port:8889,
});

module.exports = pool.promise();