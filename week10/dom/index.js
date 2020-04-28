var basket = [];
var person1 = {
name : "D. Fulton ",
location : "Edinburgh",
age : "37"
};
var person2 = {
  name : "John Doe",
  location: "Edinburgh",
  age : "12"
};
var person3 = {
  name : "James",
  location: "remote",
  age : " unindentified"
}
basket.push(person1);
basket.push(person2);
basket.push(person3);
array.pop();
// basket.pop();
// basket.pop();

document.getElementsByClassName('name')[0].innerHTML = basket[0].name + basket[0].age;
document.getElementsByClassName('name')[1].innerHTML = basket[0].name + basket[0].age;
document.getElementsByTagName('li')[1].innerHTML = basket[1].name;
// document.getElementsByTagName('li')[2].innerHTML = basket[2].name;
// document.getElementsByTagName('li')[3].innerHTML = basket[3];
// document.getElementsByTagName('li')[4].innerHTML = basket[4];
// document.getElementsByTagName('li')[5].innerHTML = basket[5];
// document.getElementsByTagName('li')[6].innerHTML = basket[6];
// var numbs = basket.length;


document.getElementById('t').innerHTML = basket[0].name;
document.getElementById('d').innerHTML = basket[1].name + '&nbsp' + basket[1].location;
var node = document.createElement('li')
var textNode = document.createTextNode(basket[0].name);
node.appendChild(textNode);

// var textNode2 = document.createTextNode(basket[1].name)
// node.appendChild(textNode2)
//
// document.getElementById('myList').appendChild(node);

// function run(){
//   var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//   document.getElementById("x").classList.add("main");
//
// }
//
// function move(){
//   document.getElementById("cr").classList.add("circle-move");
// }
