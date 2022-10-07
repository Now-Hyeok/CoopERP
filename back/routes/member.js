const express = require('express');
const router = express.Router();
let db = require('../config/config');

router.post('/registration',(req,res,next)=>{



    db.connect((err)=>{
        if(err) console.error(err);

        console.log(req.body)
    });
    db.end();

  
    
});

router.get('/data',(req,res,next)=>{
  db.connect((err)=>{
    if(err) console.error(err);

    console.log('success');
  })
})


module.exports = router;





  
  // app.get('/api/user/data',(req,res)=>{
  //   db.query('SELECT * FROM coopMember',(err,rows,fields)=>{
  //     console.log(rows);
  //     console.log(fields);
  //   });
  // });