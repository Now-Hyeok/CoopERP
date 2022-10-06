const mysql = require('mysql');

const db = mysql.createConnection({
    host:'inventory.c9ibzimhazfs.ap-northeast-2.rds.amazonaws.com',
    user:'admin',
    password:'asdf1234',
    database:'erp',
    connectionLimit: 5
});

module.exports = db;