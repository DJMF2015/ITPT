// var i= 100;
// var text = "";
// while(i > 0){
//   var x = i - 1;
//   text += "The number is " + i + "<br>" + "The minus value is " + x + "<br><br>";
//   i--;
// }
// document.getElementById("heading").innerHTML = text;

let bottles = 99;
let text = "";

while(bottles>=1){
  bottles -1;
  text += bottles + " bottles of beer on the wall," + bottles + "bottles of beer." +
  "<br>" + "Take one down and pass it around, " + bottles + " bottles of beer on the wall." + "<br><br>";
  if (bottles === 1){
    text += bottles + " Take one down and pass it around, no more bottles of beer on the wall. " + "<br><br>"+
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  }
  bottles--;
}
document.getElementById("heading").innerHTML = text;

//   var i= 99;
//
//   var text = "";
//
//   while(i > 0){
//     var x = i - 1;
//     if (i!=1)
//     {
//       console.log(text += i+" bottles of beer on the wall, "+i+" bottles of beer.<br>Take one down and pass it around, "+x+ " bottles of beer on the wall.<br><br>")
//
//     }
//     else
//
//     {
//       console.log(text +="<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, 99 bottles of beer on the wall. <br>");
//
//     }
//
//     i--;
//
//   }
//
//  // bottlesOfBeer();
// document.getElementById("heading").innerHTML = text;;
