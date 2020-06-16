// const MongoClient = require('mongodb').MongoClient;
// const { strictEqual } = require('assert');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/documentDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//new instance of fruitsSchema
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: String,
    rating: 7,
    review: "pretty good"
});

 //save to database;
 // fruit.save();
 // console.log(fruit)

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37

});

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

document.save();
console.log(document);



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

