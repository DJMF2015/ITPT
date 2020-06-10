const express = require('express')
const app = express()
const port = 3000;
const parser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

const obj = {name: "David Fulton", phonenumber: 87272828, address: "edinburgh" };


MongoClient.connect(url, { useUnifiedTopology: true }, 
function(err, db) {
    if (err) throw err;
    var dbo = db.db("customer");
    dbo.collection("DavidShop").insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log("1 document has been inserted successfully");
        db.close();

    })

});

app.use(parser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    res.render('index', { obj});
});

app.listen(port, function () {
    console.log("server 3000 is up and running")
});


























// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("customer"); 
//     dbo.collection("DavidShop").insertOne(obj, function(err, db){
//         if (err) throw err;
//         console.log("1 document succesfully inserted into collection");
//         db.close();
//     });
// });