const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'natdev2',
    password: 'root',
    port:8889,
});


// const pool = mysql.createPool({
//     host: '34.72.218.249',
//     user: 'root',
//     database: 'natdev',
//     password: 'natdev123.',
//     port: 3306,
// });

module.exports = pool.promise();