const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'natdev 2.0',
    password: '',
});

module.exports = pool.promise();