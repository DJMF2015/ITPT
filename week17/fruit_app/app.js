// const MongoClient = require('mongodb').MongoClient;
// const { strictEqual } = require('assert');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//new instance of fruitsSchema
const Fruit = mongoose.model("Fruit", fruitSchema);

const orange = new Fruit({
    name: "Orange",
    rating: 88,
    review: "Delicious"
});

const kiwi = new Fruit({
    name: "kiwi",
    rating: 2,
    review: "fantastic"
});

const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Top Banana"
});

// Fruit.insertMany([orange, kiwi, banana], (function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("successfully inserted many")
//     }
// }));
//save to database;
//  fruit.save();
//  console.log(fruit)
Fruit.find(function (err, fruits) {
    var fruitArray = [];
    fruits.forEach(function(fruit){
        fruitArray.push(fruit.name)
        console.log(fruit.name)
    if (err) {
        console.log(err)
     } else {
      console.log("successful")
            }
        // console.log("Name of fruits: " + fruitArray)
    });
});

//define schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//define new instance of model
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37

});
//save
// person.save();
// console.log(person);

const documentSchema = new mongoose.Schema({
    name: String,
    serialNumber: Number
});

const Document = mongoose.model("Document", documentSchema);

const document = new Document({
    name: "java",
    age: 25
});

// document.save();
// console.log(document);

//find
const findDocuments = function (db, callback) {
    const collection = db.collection('fruits');
    //find all documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("found following records");
        console.log(fruits);
        callback(fruits);
    });
}

