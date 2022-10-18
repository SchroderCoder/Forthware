// const mysql = require('mysql2');

// // const pool = mysql.createPool({
// //     host: 'localhost',
// //     user: 'root',
// //     database: 'natdev',
// //     password: ''
// // });



// const pool = mysql.createPool({
//     host: '35.232.62.89',
//     user: 'root',
//     database: 'NatDev',
//     password: '1234',
//     port: 3306,
// });

// module.exports = pool.promise();

const mysql = require('mysql2');
const pool = mysql.createPool({

    host: '34.171.63.83',
    user: 'root',
    database: 'NatDev',
    password: 'forthware2',
    port: 3306,

});

module.exports = pool.promise();