var mysql = require('mysql');

const sqlConfig = {
    host : 'localhost',
    port: '3306',
    user : 'root',
    password:'',
    database: 'inventariofcm'
}

const ConexionMysql = mysql.createConnection(sqlConfig);


module.exports = {
    ConexionMysql
}