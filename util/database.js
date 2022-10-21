const mysql = require('mysql2');
const pool = mysql.createPool({
    
    host: '35.232.62.89',
    user: 'root',
    database: 'NatDev',
    password: 'Ce0f9LX8TYQpiScm7mNoQ4Hh5qkrn1uy6srUJtLyihJzn6L7QqDSAIlD1v6M',
    port: 3306,
});

module.exports = pool.promise();
