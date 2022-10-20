const express = require('express');
const router = express.Router();
const { Sales } = require('../models/index.js');

router.get('/data', async function(res, req, next){

})

router.delete('/delete/:id', async function(req,res,next){
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


router.post('/data', async function(res, req, next){
    await Sales.create({
        Product_id: req.body.product,
        Sales_amount: req.body.amount,
        Sales_price: req.body.price,
        Sales_date: req.body.date,
    }).then(_ => console.log("Data is created!"));
    res.send('');
})


module.exports = router;