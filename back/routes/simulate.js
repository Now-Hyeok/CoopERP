var express = require('express');
const router = express.Router();
const zmq = require("zeromq")


router.post('/engine', async (req, res, next) => {

  async function runClient() {
    console.log('Connecting to hello world server…');

    //  Socket to talk to server
    const sock = new zmq.Request();
    sock.connect('tcp://172.17.15.116:5000');


    let s = [req.body.period, req.body.demand, req.body.supply, 'start']
    console.log(s);
    await sock.send(s);

    const [result] = await sock.receive();
    console.log('Received ', result.toString());
    res.send('30');
  }

  runClient();


})


module.exports = router;