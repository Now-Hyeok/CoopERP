var express = require('express');
const router = express.Router();
let pool = require('../config/config');


router.post('/simulate', async (req, res, next) => {

  // async function runClient() {
  //   console.log('Connecting to hello world server…');

  //   //  Socket to talk to server
  //   const sock = new zmq.Request();
  //   sock.connect('tcp://172.17.10.111:5000');


  //   let s = [req.body.period, req.body.demand, req.body.supply, 'start']
  //   await sock.send(s);

  //   const [result] = await sock.receive();
  //   console.log('Received ', result.toString());

  // }

  // runClient();


  res.send('end');
})

router.get('/simulate', async (req, res, next) => {

  await pool.getConnection((err, conn) => {
    if (err) console.error(err);

    let sql = `select Sales_amount, Warehousing_amount, Trash_amount FROM Simulate_Sales `;
    conn.query(sql, (err, result) => {
      conn.release();
      if (err) {
        console.error(err)
      }

      var sales = [];
      var ware = [];
      var trash = [];
      var inventory = [];
      for (item in result) {
        sales[item] = result[item].Sales_amount;
        ware[item] = result[item].Warehousing_amount;
        trash[item] = result[item].Trash_amount;
        if (item == 1){
          inventory[item] = ware[item] - trash[item] - sales[item];
          continue;
        }
        inventory[item] = inventory[item-1] + ware[item] - trash[item] - sales[item];
      }


      // send data
      var data = null;
      data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Shipment-amount',
            backgroundColor: 'red',
            data: sales
          },
          {
            label: 'Warehousing-amount',
            backgroundColor: 'blue',
            data: ware
          },
          {
            label: 'Disuse-amount',
            backgroundColor: 'green',
            data: trash
          },
          {
            label: 'Inventory',
            backgroundColor: 'black',
            data: inventory
          },
        ]
      }

      // data = {
      //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      //   datasets: [
      //     {
      //       label: 'Shipment-sales',
      //       backgroundColor: 'blue',
      //       data: price
      //     }
      //   ]
      // }

      res.send(data);
    })
  })
})


module.exports = router;