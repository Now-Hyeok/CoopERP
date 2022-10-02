const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'inventory.c9ibzimhazfs.ap-northeast-2.rds.amazonaws.com',
    user:'admin',
    password:'asdf1234',
    database:'erp',
    connectionLimit: 5
});

pool.getConnection()
    .then(conn=>{
        console.log('conn');
        conn.query("CREATE TABLE")
    }).catch(err=>{
        console.log(err);
        
    })


module.exports = pool;