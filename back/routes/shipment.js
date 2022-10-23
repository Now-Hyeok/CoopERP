var express = require('express');
const router = express.Router();
const { Shipment } = require('../models/index.js');


router.get('/data', async (req, res, next)=>{
  const result = await Shipment.findAll().catch((err)=>{
      console.log(err);
  })
  res.send(result);
})


module.exports = router;