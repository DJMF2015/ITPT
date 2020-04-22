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
//array.pop();
// basket.pop();
basket.pop();
document.getElementsByClassName('name')[0].innerHTML = basket[0].name + basket[0].age;
document.getElementsByClassName('name')[1].innerHTML = basket[0].name + basket[0].age;
document.getElementsByTagName('li')[1].innerHTML = basket[1].name;
document.getElementsByTagName('li')[2].innerHTML = basket[2].name;
// document.getElementsByTagName('li')[3].innerHTML = basket[3];
// document.getElementsByTagName('li')[4].innerHTML = basket[4];
// document.getElementsByTagName('li')[5].innerHTML = basket[5];
// document.getElementsByTagName('li')[6].innerHTML = basket[6];
