const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'natdev',
//     password: ''
// });



const pool = mysql.createPool({
    host: '35.232.62.89',
    user: 'root',
    database: 'NatDev',
    password: 'PFAhX4ocZC52x6n3Ydho',
    port: 3306,
});

module.exports = pool.promise();