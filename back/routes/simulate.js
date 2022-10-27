var express = require('express');
const router = express.Router();
const zmq = require("zeromq")


router.post('/engine', async (req, res, next)=>{
  if(req.body.Go){
    async function run() {
        const sock = new zmq.Request
      
        sock.connect("tcp://127.0.0.1:5555")
        console.log("Producer bound to port 5555")
      
        await sock.send("4")
        const [result] = await sock.receive()
      
        console.log(result)
        res.send(result)
      }
      run()
  }
  
})


module.exports = router;