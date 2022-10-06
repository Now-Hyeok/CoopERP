const express = require('express');
const router = express.Router();
let db = require('../config/config');

router.post('/api/user/registration',(req,res,next)=>{
    // db.connect((err)=>{
    //     if(err) throw err

    //     db.query(`INSERT INTO coopMember (Coop_name, Coop_address, Coop_pw, Coop_login_id) VALUES(${req.body.name},${req.body.address},${req.body.password},${req.body.id})`,(err, rows,fields)=>{
    //         if(err){
    //           throw err;
    //         }else{
    //           console.log("성공");
    //         }
    //       });
    // });

    // db.end();

    res.send('success');
})

module.exports = router;





  
  // app.get('/api/user/data',(req,res)=>{
  //   db.query('SELECT * FROM coopMember',(err,rows,fields)=>{
  //     console.log(rows);
  //     console.log(fields);
  //   });
  // });