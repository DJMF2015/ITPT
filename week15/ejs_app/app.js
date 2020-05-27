const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const heroes = require('superheroes');
app.use(parser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    var hero = heroes.random();
    let d  = new Date();
     let day = d.getUTCDay();
    let date = d.getUTCDate();
     let today = ""
     switch(day){
         case 1:
             today = "Monday" + "\t" + date;
             break;
         case 2:
             today = "Tuesday" + "\t" + date ;
             break;
         case 3:    
             today = "Wednesday" + "\t" + date;
             break;
             case 4:
             today = "Thursday" + "\t" + date;;
                 break;
                 case 5:
             today = "Friday" + "\t" + date;
                     break;
                     case 6:
                         today="Saturday";
                         break;
                         case 7:
                             today="Sunday";
                             break;
                             default: console.log("error")
     }
    res.render('index', { listofhero: hero, today: day});

});

app.listen(port, function (req, res) {
    console.log("server is up and running on port " + port);
});