const express = require('express');
const { off } = require('../config/config');
const router = express.Router();
let pool = require('../config/config');

router.get('/stock',(req,res,next)=>{
  pool.getConnection((err,conn)=>{
    if(err) console.error(err);
    let sql = ``;
    conn.query(sql,(err,result)=>{
      conn.release();
      if(err){
        console.log(err);
      }
      res.send(result);
    })
  })
})


module.exports = router;





  
  // app.get('/api/user/data',(req,res)=>{
  //   db.query('SELECT * FROM coopMember',(err,rows,fields)=>{
  //     console.log(rows);
  //     console.log(fields);
  //   });
  // });