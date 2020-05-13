const express = require('express')
const router = express()
const port = 3000;
const parser = require('body-parser')

router.use(parser.urlencoded({extended:true}))

router.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");

})

router.post('/', function(req,res){
  const input1  = req.body.input1;
  const input2  = req.body.input2;
  const result = Number(input1) + Number(input2)
  res.send("<h1>The data was "+ result);
})

router.get('/about', function (req, res) {
  res.sendFile(__dirname + "/about.html");
})


router.listen(port, function (req, res) {
  console.log('server is running: ' + port)
})
