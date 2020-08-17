//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todolistDB', { useUnifiedTopology: true,  useNewUrlParser:true });
//NEEDED TO CONNECT BELOW Mongoose connecttion to Mongodb Cloud Atlas
// mongoose.connect('mongodb+srv://root:0995@cluster0-2j0z7.mongodb.net/newdb', {useUnifiedTopology: true, useNewUrlParser: true  });

//schma for model items
const itemSchema={
  name: String
  //..........
}

const Item = mongoose.model("Item", itemSchema);

const items=[];
const day = date.getDate();

const item1 = new Item ({
  name: "Welcome to your todoList!!"
});

const item2 = new Item({
  name: "check box to tick-off todo item"
});

const defaultItems = [item1, item2];

app.get("/", function(req, res) {
// find post and insert
  Item.find({}, function(err, foundItems){

    if(foundItems.length === 0){
      Item.insertMany(defaultItems,function(err){
        if (err){
          console.log(err);
        } else {
          console.log ("Sucessfully saved default values");
        }
      });
      res.redirect('/');
    }else {
      res.render("list", {listTitle: day, newListItems: foundItems});
    }
  });
});


// add post
app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName
  });
  item.save();
  res.redirect("/");
});

// delete post
app.post("/delete", function(req, res){
  const checkedItemID = req.body.checkbox;
  Item.findByIdAndRemove (checkedItemID, function(err){
    if(!err){
      console.log("successfully deleted item fromm database");
      res.redirect("/");
    }
  });
});


// update post...........


// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
