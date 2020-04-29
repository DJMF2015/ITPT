// var i= 100;
// var text = "";
// while(i > 0){
//   var x = i - 1;
//   text += "The number is " + i + "<br>" + "The minus value is " + x + "<br><br>";
//   i--;
// }
// document.getElementById("heading").innerHTML = text;

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

let bottles = 99;
var text = "";

while(bottles>=1){
  let drink = bottles -1; //drink a bottle
  text += bottles + " bottles of beer on the wall," + bottles + "bottles of beer." +
  "<br>" + "Take one down and pass it around, " + drink + "bottles of beer on the wall."
  if (bottles === 2){
    text += bottles + " bottle of beer on the wall," + bottles + "bottle of beer."
    +
    "<br>" + "Take one down and pass it around, no more bottles of beer on the wall."
  }
  bottles--;
}
document.getElementById('heading').innerHTML = text;

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
