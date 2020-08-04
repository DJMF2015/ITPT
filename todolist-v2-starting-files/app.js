//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser:true });
//schma for model items
const itemSchema={
  name: String
  //..........
}

const Item = mongoose.model("Item", itemSchema);
const items=[];
const item = new Item({
  name: "Welcome to the new to-do list"
});
const item2 = new Item({
  name: "check box to tick-off todo item"
});

const item3 = new Item({
  name: "<--Hit the button to add todo-->"
});

const defaultItems = [item, item2, item3];
Item.insertMany(defaultItems, function(err){
  if(err){
    console.log(err);

  }else{
    console.log("sucessfully added defaul items in db");
  }
});


app.get("/", function(req, res) {
  const day = date.getDate();

  Item.find({}, function(err, foundItems){
    console.log(foundItems);
});
  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  const item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
