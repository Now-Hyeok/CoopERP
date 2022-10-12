const express = require('express');
const { off } = require('../config/config');
const router = express.Router();
let pool = require('../config/config');

router.post('/registration',(req,res,next)=>{

  pool.getConnection((err,conn)=>{
      if(err) console.error(err);
      let sql =`INSERT INTO coopMember(Member_name,Member_address,Member_pw,Member_login_id,Member_phone) VALUES("${req.body.name}","${req.body.address}","${req.body.password}","${req.body.id}",${req.body.phone});`; 
      conn.query(sql,(err,result)=>{
        conn.release();
        if(err){
          console.error(err);
        } 
        console.log('1 record inserted');

      });
  });

});

router.get('/data',(req,res,next)=>{
  pool.getConnection((err,conn)=>{
    if(err) console.error(err);
    let sql = "SELECT * FROM coopMember;";
    conn.query(sql ,(err,result)=>{
      conn.release();
      if(err){ 
        console.error(err);
      }
      res.send(result);


    });
  });


});

router.delete('/delete/:id',(req,res,next)=>{
  if(!req.params.id){
    res.status(500).send('ID is not exist.');
    return;
  }
  pool.getConnection((err,conn)=>{
    if(err) console.error(err);
    let sql = `DELETE FROM coopMember WHERE Member_id = '${req.params.id}';`;
    conn.query(sql,(err,result)=>{
      conn.release();
      console.log(result);
      if(err){
        console.error(err);
        res.status(500).send('Internal Serve Error');
      }
      res.send({});
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