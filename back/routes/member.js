const express = require('express');
const router = express.Router();
let db = require('../config/config');

router.post('/registration',(req,res,next)=>{

  db.connect((err)=>{
      if(err) console.error(err);
      let sql =`INSERT INTO coopMember(Member_name,Member_address,Member_pw,Member_login_id,Member_phone) VALUES(${req.body.name},${req.body.address},${req.body.password},${req.body.id},${req.body.phone})`; 
      db.query(sql,(err,result)=>{
        if(err){
          console.error(err);
          db.end();
        } 
        console.log('1 record inserted');
        db.end();
      });
  });
});

router.get('/data',(req,res,next)=>{
  db.connect((err)=>{
    if(err) console.error(err);
    let sql = "SELECT * FROM coopMember";
    db.query(sql ,(err,result)=>{
      if(err){ 
        db.end();
        console.error(err);
      }
      res.send(result);
      db.end();

    });
  });

});


module.exports = router;





  
  // app.get('/api/user/data',(req,res)=>{
  //   db.query('SELECT * FROM coopMember',(err,rows,fields)=>{
  //     console.log(rows);
  //     console.log(fields);
  //   });
  // });