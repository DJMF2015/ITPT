const express = require('express')
const app = express()
const port = 3000;
const parser = require('body-parser');
const displayDate = require('./components/date.js');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useUnifiedTopology: true}, function(err, db) {
        if (err) {
            console.log(err);
            db.close();
        }
    });
// const db = client.db('customer');
// const cust = db.collection('clients');
// console.log(cust);

app.use(parser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { showdate: displayDate });
});

app.listen(port, function () {
    console.log("server 3000 is up and running")
});