const express = require('express')
const router = express()
const port = 3000;
const parser = require('body-parser')

router.use(parser.urlencoded({extended:true}))

router.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");

})

router.post('/', function(req,res){
  var weight  = req.body.weight;
  var height  = req.body.height;
  var result = "";

  // var options = req.body.op;
  // var result = "" ;
  // switch (options) {
  //   case '+':
  //   result = Number(input1) + Number(input2)
  //   break;
  //   case '-':
  //   result = Number(input1) - Number(input2)
  //   break;
  //   case '*':
  //   result = Number(input1) * Number(input2)
  //   case '/':
  //   result = Number(input1) / Number(input2)
  //   break;
  //   default: console.log('please enter a number and operator')
  // }

  //Formula: weight (kg) / [height (m)]2

  result = Number(weight) /  Number(height * height)
  res.send("<h1>Result is "+ result);
})

router.get('/about', function (req, res) {
  res.sendFile(__dirname + "/about.html");
})


router.listen(port, function (req, res) {
  console.log('server is running: ' + port)
})
