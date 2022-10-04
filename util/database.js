const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'natdev2',
//     password: 'root',
//     port:8889,
// });



const pool = mysql.createPool({
    host: '34.171.63.83',
    user: 'root',
    database: 'natdev 2.0',
    password: '',
});

module.exports = pool.promise();