const express = require('express');
const router = express.Router();
let pool = require('../config/config');
const { Sales } = require('../models/index.js');

// router.get('/data', async (req, res, next)=>{
//     const result = await Sales.findAll({
//         include: [{
//             model: product,
//             as: 'Product',
//             required: false
//         }]
//     }).catch((err)=>{
//         console.log(err);
//     })
//     res.send(result);
// })

router.get('/data/:id', (req, res, next)=>{
    pool.getConnection((err,conn)=>{
        if(err) console.error(err);
        let sql = `select STRAIGHT_JOIN sa.Sales_amount, sa.Sales_date, sa.Sales_price, p.Product_name  
        from Sales sa left join product p on sa.Product_id = p.Product_id WHERE p.Coop_id = ${req.params.id}`;
        conn.query(sql,(err,result)=>{
          conn.release();
          if(err){
            console.error(err);
          }
          res.send(result);
        })
      })
})


router.delete('/delete/:id', async (req,res,next)=>{
    if(!req.params.id){
        res.status(500).send('ID is not exist.');
        return ;
    }

    await Sales.destroy(
        {where: {Sales_id: req.params.id}}
    ).catch((err)=>{
        console.log("delete Error: ", err);
    })
})


router.post('/registration', async (req, res, next)=>{
    await Sales.create({
        Product_id: req.body.product,
        Sales_amount: req.body.amount,
        Sales_price: req.body.price,
        Sales_date: req.body.date,
    }).then(_ => console.log("Data is created!"));
    res.send('');
})


module.exports = router;